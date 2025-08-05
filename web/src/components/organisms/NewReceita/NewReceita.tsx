import type { CreateReceitaInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ReceitaForm from 'src/components/organisms/ReceitaForm'
import { CREATE_RECIPE_MUTATION } from 'src/requests'

const NewReceita = () => {
  const [createReceita, { loading, error }] = useMutation(
    CREATE_RECIPE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Receita created')
        //navigate(routes.receitas())
      },
      onError: (error) => {
        console.log(error)
        toast.error('TESTE')
      },
    }
  )

  const onSave = (input: CreateReceitaInput) => {
    createReceita({
      variables: { input },
    })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Receita</h2>
      </header>
      <div className="rw-segment-main">
        <ReceitaForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewReceita
