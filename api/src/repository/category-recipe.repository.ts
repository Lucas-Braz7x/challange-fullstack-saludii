import { Prisma } from '@prisma/client'

import { BaseRepository } from './dto/base-repository'

export class CategoryRecipeRepository extends BaseRepository<Prisma.CategoriaReceitaDelegate> {
  constructor(public repository: Prisma.CategoriaReceitaDelegate) {
    super(repository)
  }
}
