import { Prisma } from '@prisma/client'

import { BaseRepository } from './dto/base-repository'

export class TagRecipeRepository extends BaseRepository<Prisma.TagReceitaDelegate> {
  constructor(public repository: Prisma.TagReceitaDelegate) {
    super(repository)
  }
}
