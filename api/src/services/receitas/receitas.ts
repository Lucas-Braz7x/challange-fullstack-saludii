/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  QueryResolvers,
  MutationResolvers,
  ReceitaRelationResolvers,
} from 'types/graphql'

import { recipeFactory } from 'src/factory/recipe-factory'

const recipeRepository = recipeFactory()

export const receitas: QueryResolvers['receitas'] = ({ query }) => {
  const searchFilter = query
    ? {
        OR: [
          { slug: { contains: query /* , mode: 'insensitive' */ } },
          { titulo: { contains: query /* , mode: 'insensitive' */ } },
          { modoPreparo: { contains: query /* , mode: 'insensitive' */ } },
          { ingredientes: { contains: query /* , mode: 'insensitive' */ } },
          { notaPessoal: { contains: query /* , mode: 'insensitive' */ } },
        ],
      }
    : undefined

  return recipeRepository.findMany({
    where: searchFilter,
    //include: recipeInclude,
  })
}

export const receita: QueryResolvers['receita'] = ({ id }) => {
  return recipeRepository.findUnique({
    where: { id },
  })
}

export const createReceita: MutationResolvers['createReceita'] = ({
  input,
}) => {
  const { categorias, tags, ...data } = input

  return recipeRepository.create({
    data: {
      ...data,
      categorias: {
        create: categorias.map((nome) => ({
          categoria: {
            connectOrCreate: {
              where: { nome },
              create: { nome },
            },
          },
        })),
      },
      tags: {
        create: tags.map((nome) => ({
          tag: {
            connectOrCreate: {
              where: { nome },
              create: { nome },
            },
          },
        })),
      },
    },
  })
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
  categorias: async (obj, { root, context }: any) => {
    return context.loaders.categoryPerRecipeLoader.load(root.id)
  },

  tags: async (obj, { root, context }: any) => {
    return context.loaders.tagPerRecipeLoader.load(root.id)
  },
}
