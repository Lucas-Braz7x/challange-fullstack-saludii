import DataLoader from 'dataloader'

import { tagRecipeFactory } from './../factory'

export const tagPerRecipeLoader = new DataLoader(
  async (recipeIds: readonly string[]) => {
    const tagRecipeRepository = tagRecipeFactory()

    const all = await tagRecipeRepository.findMany({
      where: {
        receitaId: { in: recipeIds as string[] },
      },
      include: {
        tag: true,
      },
    })

    return recipeIds.map((id) =>
      all
        .filter((relation) => relation.receitaId === id)
        .map((relation) => ({ tag: { ...relation.tag } }))
    )
  }
)
