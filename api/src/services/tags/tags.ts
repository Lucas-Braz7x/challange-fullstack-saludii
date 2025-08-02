import type {
  QueryResolvers,
  MutationResolvers,
  TagRelationResolvers,
} from 'types/graphql'

import { tagFactory } from './../../factory/tag-factory'

const tagRepository = tagFactory()

export const tags: QueryResolvers['tags'] = () => {
  return tagRepository.findMany()
}

export const tag: QueryResolvers['tag'] = ({ id }) => {
  return tagRepository.findUnique({
    where: { id },
  })
}

export const createTag: MutationResolvers['createTag'] = ({ input }) => {
  return tagRepository.create({
    data: input,
  })
}

export const updateTag: MutationResolvers['updateTag'] = ({ id, input }) => {
  return tagRepository.update({
    data: input,
    where: { id },
  })
}

export const deleteTag: MutationResolvers['deleteTag'] = ({ id }) => {
  return tagRepository.delete({
    where: { id },
  })
}

export const Tag: TagRelationResolvers = {
  receitas: (_obj, { root }) => {
    return tagRepository.findRecipe(root?.id)
  },
}
