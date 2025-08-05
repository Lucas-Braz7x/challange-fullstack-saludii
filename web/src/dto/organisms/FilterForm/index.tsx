import { useState } from 'react'
import React from 'react'

import { useLazyQuery } from '@apollo/client'
import { TextField } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import { AutocompleteInput } from 'src/components/atoms/AutoComplete'
import { LIST_QUERY } from 'src/requests'

const UserSchema = Yup.object().shape({
  titulo: Yup.string().default(''),
  ingredientes: Yup.string().default(''),
  tags: Yup.array().of(Yup.string()).default([]),
  categorias: Yup.array().of(Yup.string()).default([]),
})

export const FilterForm = () => {
  const [categories, setCategories] = useState()
  const [tags, setTags] = useState()

  console.log({ categories, tags })

  const [teste, {}] = useLazyQuery(LIST_QUERY, {
    onCompleted(data) {
      console.log('TESTEEEEEEEEE: ', data)
    },
  })

  const handleSubmit = async (values: any) => {
    console.log({ categories, tags })

    console.log({ values })
    await teste({
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
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, handleChange, values }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
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

            <Grid size={{ xs: 12, md: 4 }}>
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

            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                fullWidth
                label="Título"
                name="titulo"
                value={values.titulo}
                onChange={handleChange}
                error={touched.titulo && Boolean(errors.titulo)}
                helperText={touched.titulo && errors.titulo}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                fullWidth
                label="Ingredientes"
                name="ingredientes"
                value={values.ingredientes}
                onChange={handleChange}
                error={touched.ingredientes && Boolean(errors.ingredientes)}
                helperText={touched.ingredientes && errors.ingredientes}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Button type="submit" variant="contained" color="primary">
                Cadastrar
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}
