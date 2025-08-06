/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@apollo/client'
import AddIcon from '@mui/icons-material/Add'
import { Box, Button, Grid } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { Formik } from 'formik'

import { toast } from '@redwoodjs/web/toast'

import { TiptapEditor } from 'src/components/atoms/TiptapEditor'
import { ReceitaFormProps } from 'src/dto/organisms/RecipeForm'
import { LIST_CATEGORIES_QUERY } from 'src/requests/category'
import { LIST_TAGS_QUERY } from 'src/requests/tags'

import { validationSchema } from './utils/validationSchema'

export const RecipeForm = (props: ReceitaFormProps) => {
  const onSubmit = async (data: any) => {
    console.log({ data })

    await props.onSave({ ...data })
  }

  const { loading, data } = useQuery(LIST_CATEGORIES_QUERY, {
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const { data: dataTags } = useQuery(LIST_TAGS_QUERY, {
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
    <Formik
      initialValues={{
        titulo: props.receita?.titulo || '',
        ingredientes: props.receita?.ingredientes || '',
        modoPreparo: props.receita?.modoPreparo || '',
        tempoPreparo: props.receita?.tempoPreparo || '',
        porcoes: props.receita?.porcoes || '',
        notaPessoal: props.receita?.notaPessoal || '',
        slug: props.receita?.slug || '',
        categorias: [],
        tags: [],
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        setFieldValue,
        touched,
        errors,
      }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                name="titulo"
                label="Título"
                value={values.titulo}
                onChange={handleChange}
                fullWidth
                error={touched.titulo && Boolean(errors.titulo)}
                helperText={touched.titulo && (errors.titulo as string)}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              <TextField
                name="tempoPreparo"
                label="Tempo de Preparo (min)"
                type="number"
                value={values.tempoPreparo}
                onChange={handleChange}
                fullWidth
                error={touched.tempoPreparo && Boolean(errors.tempoPreparo)}
                helperText={
                  touched.tempoPreparo && (errors.tempoPreparo as string)
                }
              />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              <TextField
                name="porcoes"
                label="Porções"
                type="number"
                value={values.porcoes}
                onChange={handleChange}
                fullWidth
                error={touched.porcoes && Boolean(errors.porcoes)}
                helperText={touched.porcoes && (errors.porcoes as string)}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 12 }}>
              <TextField
                name="notaPessoal"
                label="Nota Pessoal"
                value={values.notaPessoal}
                onChange={handleChange}
                fullWidth
                error={touched.notaPessoal && Boolean(errors.notaPessoal)}
                helperText={
                  touched.notaPessoal && (errors.notaPessoal as string)
                }
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                name="slug"
                label="Slug"
                value={values.slug}
                onChange={handleChange}
                fullWidth
                error={touched.slug && Boolean(errors.slug)}
                helperText={touched.slug && (errors.slug as string)}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              <Autocomplete
                multiple
                freeSolo
                options={options}
                value={values.categorias}
                onChange={(_, value) => setFieldValue('categorias', value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Categorias"
                    error={touched.categorias && Boolean(errors.categorias)}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              <Autocomplete
                multiple
                freeSolo
                options={optionsTags}
                value={values.tags}
                onChange={(_, value) => setFieldValue('tags', value)}
                renderInput={(params) => <TextField {...params} label="Tags" />}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TiptapEditor
                id="ingredientes"
                value={values.ingredientes}
                label="Ingredientes"
                onChange={(md) => setFieldValue('ingredientes', md)}
                error={touched.ingredientes && Boolean(errors.ingredientes)}
                helperText={
                  touched.ingredientes && (errors.ingredientes as string)
                }
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TiptapEditor
                id="modoPreparo"
                label="Mode de preparo"
                value={values.modoPreparo}
                onChange={(md) => setFieldValue('modoPreparo', md)}
                error={touched.modoPreparo && Boolean(errors.modoPreparo)}
                helperText={
                  touched.modoPreparo && (errors.modoPreparo as string)
                }
              />
            </Grid>

            <Grid size={{ xs: 12, md: 12 }}>
              <Box textAlign="right" marginTop={5}>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={loading}
                  className="rw-button rw-button-green"
                  endIcon={<AddIcon />}
                >
                  Adicionar
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  )
}
