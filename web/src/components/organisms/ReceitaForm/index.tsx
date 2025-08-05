/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react'

import { useQuery } from '@apollo/client'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

import { toast } from '@redwoodjs/web/toast'

import {
  /*  FormReceita, */ ReceitaFormProps,
} from 'src/dto/organisms/RecipeForm'
import { LIST_CATEGORIES_QUERY } from 'src/requests/category'
import { LIST_TAGS_QUERY } from 'src/requests/tags'

const ReceitaForm = (props: ReceitaFormProps) => {
  const formRef = useRef(null)
  const [tags, setTags] = useState<string[]>([])
  const [categories, setCategories] = useState<string[]>([])

  const onSubmit = (data: any) => {
    data.preventDefault()

    const form = formRef.current

    if (form) {
      const data = new FormData(form)

      // Converte FormData para objeto JS
      const valores = Object.fromEntries(data.entries())

      valores.porcoes = Number(valores.porcoes)
      valores.tempoPreparo = Number(valores.tempoPreparo)

      console.log('Valores do formulário:', {
        ...valores,
        tags,
        categorias: categories,
      })
      props.onSave({ ...valores, tags, categorias: categories })
    }
  }

  const { loading, error, data } = useQuery(LIST_CATEGORIES_QUERY, {
    onCompleted: () => {
      toast.success('Receita listada')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const { data: dataTags } = useQuery(LIST_TAGS_QUERY, {
    onCompleted: () => {
      toast.success('Receita listada')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const options = data?.categorias
    ? data.categorias.map((record) => ({
        label: record.nome,
        id: record.nome,
      }))
    : []

  const optionsTags = dataTags?.tags
    ? dataTags.tags.map((record) => ({
        label: record.nome,
        id: record.nome,
      }))
    : []

  return (
    <div className="rw-form-wrapper">
      <form
        onSubmit={onSubmit}
        ref={formRef}
        // errors={errors}
        // onClearErrors={setErrors}
        /* error={props.error} */
      >
        <div>
          <TextField
            name="titulo"
            label="titulo"
            defaultValue={props.receita?.titulo}
            className="rw-input"
            required
          />
        </div>

        <TextField
          name="ingredientes"
          label="ingredientes"
          defaultValue={props.receita?.ingredientes}
          className="rw-input"
          required
        />

        <TextField
          name="modoPreparo"
          label="modoPreparo"
          defaultValue={props.receita?.modoPreparo}
          className="rw-input"
          required
        />

        <TextField
          name="tempoPreparo"
          label="tempoPreparo"
          defaultValue={props.receita?.tempoPreparo}
          className="rw-input"
          required
          type="number"
        />

        <TextField
          name="porcoes"
          label="porcoes"
          defaultValue={props.receita?.porcoes}
          className="rw-input"
          required
          type="number"
        />

        <TextField
          name="notaPessoal"
          label="notaPessoal"
          defaultValue={props.receita?.notaPessoal}
          className="rw-input"
          required
        />

        <TextField
          name="slug"
          label="slug"
          defaultValue={props.receita?.slug}
          className="rw-input"
          required
        />
        <Autocomplete
          multiple
          freeSolo
          disablePortal
          onChange={(_, value: string[]) => {
            setCategories(value)
          }}
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />

        <div>
          <Autocomplete
            componentName="tags"
            disablePortal
            multiple
            freeSolo
            onChange={(_, value: string[]) => {
              setTags(value)
            }}
            options={optionsTags}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="teste" />}
          />
        </div>
        <div className="rw-button-group">
          <button
            disabled={props.loading}
            className="rw-button rw-button-blue"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default ReceitaForm
