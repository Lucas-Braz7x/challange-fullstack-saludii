import { db } from 'src/lib/db'
import { CategoryRecipeRepository } from 'src/repository'

export const categoryRecipeFactory = () => {
  const { repository } = new CategoryRecipeRepository(db.categoriaReceita)
  return { ...repository }
}
