import type {
  EditCategoriaById,
  UpdateCategoriaInput,
  UpdateCategoriaMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CategoriaForm from 'src/components/Categoria/CategoriaForm'

export const QUERY: TypedDocumentNode<EditCategoriaById> = gql`
  query EditCategoriaById($id: String!) {
    categoria: categoria(id: $id) {
      id
      nome
    }
  }
`

const UPDATE_CATEGORIA_MUTATION: TypedDocumentNode<
  EditCategoriaById,
  UpdateCategoriaMutationVariables
> = gql`
  mutation UpdateCategoriaMutation(
    $id: String!
    $input: UpdateCategoriaInput!
  ) {
    updateCategoria(id: $id, input: $input) {
      id
      nome
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ categoria }: CellSuccessProps<EditCategoriaById>) => {
  const [updateCategoria, { loading, error }] = useMutation(
    UPDATE_CATEGORIA_MUTATION,
    {
      onCompleted: () => {
        toast.success('Categoria updated')
        navigate(routes.categorias())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateCategoriaInput,
    id: EditCategoriaById['categoria']['id']
  ) => {
    updateCategoria({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Categoria {categoria?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CategoriaForm
          categoria={categoria}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
