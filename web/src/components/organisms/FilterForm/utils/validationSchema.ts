import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  titulo: Yup.string().default(''),
  ingredientes: Yup.string().default(''),
  tags: Yup.array().of(Yup.string()).default([]),
  categorias: Yup.array().of(Yup.string()).default([]),
})
