import type {
  EditReceitaById,
  UpdateReceitaInput,
  UpdateReceitaMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ReceitaForm from 'src/components/organisms/ReceitaForm'

export const QUERY: TypedDocumentNode<EditReceitaById> = gql`
  query EditReceitaById($id: String!) {
    receita: receita(id: $id) {
      id
      titulo
      ingredientes
      modoPreparo
      tempoPreparo
      porcoes
      notaPessoal
      slug
      curtidas
      createdAt
      updatedAt
    }
  }
`

const UPDATE_RECEITA_MUTATION: TypedDocumentNode<
  EditReceitaById,
  UpdateReceitaMutationVariables
> = gql`
  mutation UpdateReceitaMutation($id: String!, $input: UpdateReceitaInput!) {
    updateReceita(id: $id, input: $input) {
      id
      titulo
      ingredientes
      modoPreparo
      tempoPreparo
      porcoes
      notaPessoal
      slug
      curtidas
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ receita }: CellSuccessProps<EditReceitaById>) => {
  const [updateReceita, { loading, error }] = useMutation(
    UPDATE_RECEITA_MUTATION,
    {
      onCompleted: () => {
        toast.success('Receita updated')
        navigate(routes.receitas())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateReceitaInput,
    id: EditReceitaById['receita']['id']
  ) => {
    updateReceita({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Receita {receita?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ReceitaForm
          receita={receita}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
