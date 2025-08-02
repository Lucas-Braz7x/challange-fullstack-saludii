import { Prisma } from '@prisma/client'

import { BaseRepository } from './dto/base-repository'

export class RecipeRepository extends BaseRepository<Prisma.ReceitaDelegate> {
  constructor(public repository: Prisma.ReceitaDelegate) {
    super(repository)
  }

  async findCategories(id: string) {
    const receita = await this.repository.findFirst({
      where: { id },
      include: { categorias: true },
    })

    return receita?.categorias ?? []
  }

  async findTags(id: string) {
    return this.repository.findUnique({ where: { id } }).tags()
  }
}
