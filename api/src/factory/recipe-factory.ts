import { db } from 'src/lib/db'
import { RecipeRepository } from 'src/repository'

export const recipeFactory = () => {
  const { repository, findTags, findCategories } = new RecipeRepository(
    db.receita
  )

  return { ...repository, findTags, findCategories }
}
