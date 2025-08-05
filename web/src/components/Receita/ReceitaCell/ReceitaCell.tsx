import type { FindReceitaById, FindReceitaByIdVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Receita from 'src/components/Receita/Receita'

export const QUERY: TypedDocumentNode<
  FindReceitaById,
  FindReceitaByIdVariables
> = gql`
  query FindReceitaById($id: String!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Receita not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindReceitaByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  receita,
}: CellSuccessProps<FindReceitaById, FindReceitaByIdVariables>) => {
  return <Receita receita={receita} />
}
