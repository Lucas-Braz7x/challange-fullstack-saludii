import { Prisma } from '@prisma/client'

import { BaseRepository } from './dto/base-repository'

export class RecipeRepository extends BaseRepository<Prisma.ReceitaDelegate> {
  constructor(public repository: Prisma.ReceitaDelegate) {
    super(repository)
  }

  async findCategories(id: string) {
    return this.repository.findUnique({ where: { id } }).categorias()
  }

  async findTags(id: string) {
    return this.repository.findUnique({ where: { id } }).tags()
  }
}
