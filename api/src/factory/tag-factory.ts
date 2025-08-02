import { db } from 'src/lib/db'
import { TagRepository } from 'src/repository'

export const tagFactory = () => {
  const { repository, findRecipe } = new TagRepository(db.tag)
  return { ...repository, findRecipe }
}
