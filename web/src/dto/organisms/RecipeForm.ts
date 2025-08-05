import type {
  CreateReceitaInput,
  EditReceitaById,
  UpdateReceitaInput,
} from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'

export type FormReceita = NonNullable<EditReceitaById['receita']>

export interface ReceitaFormProps {
  receita?: EditReceitaById['receita']
  onSave: (data: any, id?: FormReceita['id']) => void
  error: RWGqlError
  loading: boolean
}
