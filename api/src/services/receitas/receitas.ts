import type {
  QueryResolvers,
  MutationResolvers,
  ReceitaRelationResolvers,
} from 'types/graphql'

import { recipeFactory } from 'src/factory/recipe-factory'

const recipeRepository = recipeFactory()

export const receitas: QueryResolvers['receitas'] = () => {
  return recipeRepository.findMany()
}

export const receita: QueryResolvers['receita'] = ({ id }) => {
  return recipeRepository.findUnique({ where: { id } })
}

export const createReceita: MutationResolvers['createReceita'] = ({
  input,
}) => {
  return recipeRepository.create({ data: input })
}

export const updateReceita: MutationResolvers['updateReceita'] = ({
  id,
  input,
}) => {
  return recipeRepository.update({ where: { id }, data: input })
}

export const deleteReceita: MutationResolvers['deleteReceita'] = ({ id }) => {
  return recipeRepository.delete({ where: { id } })
}

export const Receita: ReceitaRelationResolvers = {
  categorias: (_obj, { root }) => {
    return recipeRepository.findCategories(root.id)
  },
  tags: (_obj, { root }) => {
    return recipeRepository.findTags(root.id)
  },
}
