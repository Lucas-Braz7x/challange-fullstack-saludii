/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Receita } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'

export type FormReceita = NonNullable<Receita>

export interface ReceitaFormProps {
  receita?: Receita
  onSave: (data: any, id?: FormReceita['id']) => void
  error: RWGqlError
  loading: boolean
  handleClose?: () => void
}
