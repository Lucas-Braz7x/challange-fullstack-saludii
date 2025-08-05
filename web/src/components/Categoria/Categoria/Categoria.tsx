import type {
  DeleteCategoriaMutation,
  DeleteCategoriaMutationVariables,
  FindCategoriaById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_CATEGORIA_MUTATION: TypedDocumentNode<
  DeleteCategoriaMutation,
  DeleteCategoriaMutationVariables
> = gql`
  mutation DeleteCategoriaMutation($id: String!) {
    deleteCategoria(id: $id) {
      id
    }
  }
`

interface Props {
  categoria: NonNullable<FindCategoriaById['categoria']>
}

const Categoria = ({ categoria }: Props) => {
  const [deleteCategoria] = useMutation(DELETE_CATEGORIA_MUTATION, {
    onCompleted: () => {
      toast.success('Categoria deleted')
      navigate(routes.categorias())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteCategoriaMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete categoria ' + id + '?')) {
      deleteCategoria({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Categoria {categoria.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{categoria.id}</td>
            </tr>
            <tr>
              <th>Nome</th>
              <td>{categoria.nome}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCategoria({ id: categoria.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(categoria.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Categoria
