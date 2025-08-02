import { Prisma } from '@prisma/client'

import { BaseRepository } from './dto/base-repository'

export class CategoryRepository extends BaseRepository<Prisma.CategoriaDelegate> {
  constructor(public repository: Prisma.CategoriaDelegate) {
    super(repository)
  }

  async findRecipe(id: string) {
    return this.repository.findUnique({ where: { id } }).receitas()
  }
}
