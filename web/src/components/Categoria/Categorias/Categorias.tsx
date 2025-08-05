import type {
  DeleteCategoriaMutation,
  DeleteCategoriaMutationVariables,
  FindCategorias,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Categoria/CategoriasCell'
import { truncate } from 'src/lib/formatters'

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

const CategoriasList = ({ categorias }: FindCategorias) => {
  const [deleteCategoria] = useMutation(DELETE_CATEGORIA_MUTATION, {
    onCompleted: () => {
      toast.success('Categoria deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteCategoriaMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete categoria ' + id + '?')) {
      deleteCategoria({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <tr key={categoria.id}>
              <td>{truncate(categoria.id)}</td>
              <td>{truncate(categoria.nome)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.categoria({ id: categoria.id })}
                    title={'Show categoria ' + categoria.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCategoria({ id: categoria.id })}
                    title={'Edit categoria ' + categoria.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete categoria ' + categoria.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(categoria.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CategoriasList
