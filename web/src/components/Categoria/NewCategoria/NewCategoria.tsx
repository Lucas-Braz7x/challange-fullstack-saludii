import type {
  CreateCategoriaMutation,
  CreateCategoriaInput,
  CreateCategoriaMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CategoriaForm from 'src/components/Categoria/CategoriaForm'

const CREATE_CATEGORIA_MUTATION: TypedDocumentNode<
  CreateCategoriaMutation,
  CreateCategoriaMutationVariables
> = gql`
  mutation CreateCategoriaMutation($input: CreateCategoriaInput!) {
    createCategoria(input: $input) {
      id
    }
  }
`

const NewCategoria = () => {
  const [createCategoria, { loading, error }] = useMutation(
    CREATE_CATEGORIA_MUTATION,
    {
      onCompleted: () => {
        toast.success('Categoria created')
        navigate(routes.categorias())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateCategoriaInput) => {
    createCategoria({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Categoria</h2>
      </header>
      <div className="rw-segment-main">
        <CategoriaForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCategoria
