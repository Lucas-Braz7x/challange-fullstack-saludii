/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from 'react'

import { Receita } from 'types/graphql'
export interface FilterFormProps {
  setDataRecipes: Dispatch<SetStateAction<Receita[]>>
  updateQuery: any
}
