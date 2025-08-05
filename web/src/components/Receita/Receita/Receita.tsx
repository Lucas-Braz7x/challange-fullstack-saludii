import type {
  DeleteReceitaMutation,
  DeleteReceitaMutationVariables,
  FindReceitaById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_RECEITA_MUTATION: TypedDocumentNode<
  DeleteReceitaMutation,
  DeleteReceitaMutationVariables
> = gql`
  mutation DeleteReceitaMutation($id: String!) {
    deleteReceita(id: $id) {
      id
    }
  }
`

interface Props {
  receita: NonNullable<FindReceitaById['receita']>
}

const Receita = ({ receita }: Props) => {
  const [deleteReceita] = useMutation(DELETE_RECEITA_MUTATION, {
    onCompleted: () => {
      toast.success('Receita deleted')
      navigate(routes.receitas())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteReceitaMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete receita ' + id + '?')) {
      deleteReceita({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Receita {receita.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{receita.id}</td>
            </tr>
            <tr>
              <th>Titulo</th>
              <td>{receita.titulo}</td>
            </tr>
            <tr>
              <th>Ingredientes</th>
              <td>{receita.ingredientes}</td>
            </tr>
            <tr>
              <th>Modo preparo</th>
              <td>{receita.modoPreparo}</td>
            </tr>
            <tr>
              <th>Tempo preparo</th>
              <td>{receita.tempoPreparo}</td>
            </tr>
            <tr>
              <th>Porcoes</th>
              <td>{receita.porcoes}</td>
            </tr>
            <tr>
              <th>Nota pessoal</th>
              <td>{receita.notaPessoal}</td>
            </tr>
            <tr>
              <th>Slug</th>
              <td>{receita.slug}</td>
            </tr>
            <tr>
              <th>Curtidas</th>
              <td>{receita.curtidas}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(receita.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(receita.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editReceita({ id: receita.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(receita.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Receita
