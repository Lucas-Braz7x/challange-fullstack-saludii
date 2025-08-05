/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from 'react'

import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

interface AutocompleteProps<T> {
  name: string
  setState: Dispatch<SetStateAction<T>>
  options: Record<string, any>[]
  label: string
  onChange: (value: any) => void
  value: any
}

export const AutocompleteInput = <T,>({
  name,
  setState,
  options = [],
  label,
  onChange,
  value,
}: AutocompleteProps<T>) => {
  return (
    <Autocomplete
      componentName={name}
      disablePortal
      multiple
      freeSolo
      onChange={(_, value: any) => {
        setState(value)
      }}
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          onChange={onChange}
          {...params}
          label={label}
          value={value}
        />
      )}
    />
  )
}
