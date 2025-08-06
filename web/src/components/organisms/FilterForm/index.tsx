/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import React from 'react'

import { useLazyQuery } from '@apollo/client'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { Formik, Form } from 'formik'
import type { Receita } from 'types/graphql'

import { toast } from '@redwoodjs/web/toast'

import { AutocompleteInput } from 'src/components/atoms/AutoComplete'
import type { FilterFormProps } from 'src/dto/organisms/FilterForm'
import { LIST_RECIPES_QUERY } from 'src/requests'

import { validationSchema } from './utils/validationSchema'

export const FilterForm = ({
  setDataRecipes,
  updateQuery,
}: FilterFormProps) => {
  const [categories, setCategories] = useState()
  const [tags, setTags] = useState()

  const [listRecipes] = useLazyQuery(LIST_RECIPES_QUERY, {
    onCompleted({ receitas }) {
      toast.dismiss()
      if (receitas?.length) {
        toast.success('Receitas encontradas')
      } else {
        toast('Nenhuma receita encontrada')
      }
      setDataRecipes(receitas as Receita[])
      updateQuery((prev) => {
        if (!prev) return prev
        return {
          receitas,
        }
      })
    },
  })

  const handleSubmit = async (
    values: Pick<Receita, 'titulo' | 'ingredientes'> & {
      categorias: string[]
      tags: string[]
    }
  ) => {
    toast.loading('Pesquisando...')
    await listRecipes({
      variables: {
        query: {
          titulo: values.titulo,
          ingredientes: values.ingredientes,
          categorias: categories,
          tags,
        },
      },
    })
  }

  return (
    <Formik
      initialValues={{ tags: [], categorias: [], titulo: '', ingredientes: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, handleChange, values }) => (
        <Form>
          <Grid
            container
            spacing={2}
            display={'flex'}
            justifyContent={'center'}
          >
            <Grid size={{ xs: 12, md: 3 }}>
              <TextField
                size="small"
                fullWidth
                label="Título"
                name="titulo"
                value={values.titulo}
                onChange={handleChange}
                error={touched.titulo && Boolean(errors.titulo)}
                helperText={touched.titulo && errors.titulo}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              <TextField
                size="small"
                fullWidth
                label="Ingredientes"
                name="ingredientes"
                value={values.ingredientes}
                onChange={handleChange}
                error={touched.ingredientes && Boolean(errors.ingredientes)}
                helperText={touched.ingredientes && errors.ingredientes}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 2 }}>
              <AutocompleteInput
                name="categorias"
                setState={setCategories}
                options={[]}
                label="Categoria"
                onChange={handleChange}
                value={values.categorias}
                error={touched.categorias && Boolean(errors.categorias)}
                helperText={touched.categorias && errors.categorias}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 2 }}>
              <AutocompleteInput
                name="tags"
                setState={setTags}
                options={[]}
                label="Tags"
                value={values.tags}
                onChange={handleChange}
                error={touched.tags && Boolean(errors.tags)}
                helperText={touched.tags && errors.tags}
              />
            </Grid>

            <Grid
              size={{ xs: 12, md: 2 }}
              display={'flex'}
              justifyContent={'center'}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                endIcon={<FilterAltIcon />}
                style={{ background: '#5a7ca3' }}
              >
                Pesquisar
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}
