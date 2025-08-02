import { db } from 'src/lib/db'
import { CategoryRepository } from 'src/repository'

export const categoryFactory = () => {
  const { repository, findRecipe } = new CategoryRepository(db.categoria)
  return { ...repository, findRecipe }
}
