import type { FindCategorias, FindCategoriasVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Categorias from 'src/components/Categoria/Categorias'

export const QUERY: TypedDocumentNode<FindCategorias, FindCategoriasVariables> =
  gql`
    query FindCategorias {
      categorias {
        id
        nome
      }
    }
  `

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      No categorias yet.{' '}
      <Link to={routes.newCategoria()} className="rw-link">
        Create one?
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindCategorias>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  categorias,
}: CellSuccessProps<FindCategorias, FindCategoriasVariables>) => {
  return <Categorias categorias={categorias} />
}
