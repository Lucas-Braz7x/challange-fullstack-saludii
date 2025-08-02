import DataLoader from 'dataloader'

import { categoryRecipeFactory } from './../factory'

export const categoryPerRecipeLoader = new DataLoader(
  async (recipeIds: readonly string[]) => {
    const categoryRecipeRepository = categoryRecipeFactory()
    const all = await categoryRecipeRepository.findMany({
      where: {
        receitaId: { in: recipeIds as string[] },
      },
      include: {
        categoria: true,
      },
    })

    return recipeIds.map((id) =>
      all
        .filter((relation) => relation.receitaId === id)
        .map((relation) => ({ categoria: { ...relation.categoria } }))
    )
  }
)
