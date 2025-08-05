/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  QueryResolvers,
  MutationResolvers,
  ReceitaRelationResolvers,
} from 'types/graphql'

import { recipeFactory } from 'src/factory/recipe-factory'

const recipeRepository = recipeFactory()

export const receitas: QueryResolvers['receitas'] = ({ query }) => {
  return recipeRepository.findMany({
    where: {
      AND: [
        {
          titulo: query?.titulo ? { contains: query?.titulo } : undefined,
        },
        {
          ingredientes: query?.ingredientes
            ? {
                contains: query?.ingredientes,
              }
            : undefined,
        },
        {
          tags: query?.tags.length
            ? {
                some: {
                  tag: {
                    nome: {
                      in: query?.tags,
                    },
                  },
                },
              }
            : undefined,
        },
        {
          categorias: query?.categorias.length
            ? {
                some: {
                  categoria: {
                    nome: {
                      in: query?.categorias,
                    },
                  },
                },
              }
            : undefined,
        },
      ],
    },
  })
}

export const receita: QueryResolvers['receita'] = ({ id }) => {
  return recipeRepository.findUnique({
    where: { id },
  })
}

export const createReceita: MutationResolvers['createReceita'] = async ({
  input,
}) => {
  const { categorias, tags, ...data } = input

  let result

  try {
    result = await recipeRepository.create({
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
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }

  return result
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
