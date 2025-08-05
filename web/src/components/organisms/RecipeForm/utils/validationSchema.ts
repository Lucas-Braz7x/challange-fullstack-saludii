import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  titulo: Yup.string().required('O título é obrigatório'),
  ingredientes: Yup.string().required('Os ingredientes são obrigatórios'),
  modoPreparo: Yup.string().required('O modo de preparo é obrigatório'),
  tempoPreparo: Yup.string().required('O tempo de preparo é obrigatório'),
  porcoes: Yup.string().required('O número de porções é obrigatório'),
  notaPessoal: Yup.string().nullable(),
  slug: Yup.string().required('O slug é obrigatório'),
  categorias: Yup.array(),
  tags: Yup.array(),
})
