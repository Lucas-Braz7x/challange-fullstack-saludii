import { Prisma } from '@prisma/client'

import { BaseRepository } from './dto/base-repository'

export class TagRepository extends BaseRepository<Prisma.TagDelegate> {
  constructor(public repository: Prisma.TagDelegate) {
    super(repository)
  }

  async findRecipe(id: string) {
    return this.repository.findUnique({ where: { id } }).receitas()
  }
}
