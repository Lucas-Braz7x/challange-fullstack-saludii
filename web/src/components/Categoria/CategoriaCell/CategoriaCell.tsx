import type {
  FindCategoriaById,
  FindCategoriaByIdVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Categoria from 'src/components/Categoria/Categoria'

export const QUERY: TypedDocumentNode<
  FindCategoriaById,
  FindCategoriaByIdVariables
> = gql`
  query FindCategoriaById($id: String!) {
    categoria: categoria(id: $id) {
      id
      nome
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Categoria not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindCategoriaByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  categoria,
}: CellSuccessProps<FindCategoriaById, FindCategoriaByIdVariables>) => {
  return <Categoria categoria={categoria} />
}
