import type {
  QueryResolvers,
  MutationResolvers,
  CategoriaRelationResolvers,
} from 'types/graphql'

import { categoryFactory } from './../../factory'

const categoryRepository = categoryFactory()

export const categorias: QueryResolvers['categorias'] = () => {
  return categoryRepository.findMany()
}

export const categoria: QueryResolvers['categoria'] = ({ id }) => {
  return categoryRepository.findUnique({
    where: { id },
  })
}

export const createCategoria: MutationResolvers['createCategoria'] = ({
  input,
}) => {
  return categoryRepository.create({
    data: input,
  })
}

export const updateCategoria: MutationResolvers['updateCategoria'] = ({
  id,
  input,
}) => {
  return categoryRepository.update({
    data: input,
    where: { id },
  })
}

export const deleteCategoria: MutationResolvers['deleteCategoria'] = ({
  id,
}) => {
  return categoryRepository.delete({
    where: { id },
  })
}

export const Categoria: CategoriaRelationResolvers = {
  receitas: (_obj, { root }) => {
    return categoryRepository.findRecipe(root.id)
  },
}
