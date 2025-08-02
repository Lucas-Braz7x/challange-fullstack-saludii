import { db } from 'src/lib/db'
import { TagRecipeRepository } from 'src/repository'

export const tagRecipeFactory = () => {
  const { repository } = new TagRecipeRepository(db.tagReceita)
  return { ...repository }
}
