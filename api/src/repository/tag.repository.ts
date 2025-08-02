import { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

import { BaseRepository } from './dto/base-repository'

export class TagRepository extends BaseRepository<Prisma.TagDelegate> {
  constructor(public repository: Prisma.TagDelegate) {
    super(repository)
  }

  async findRecipe(id: string) {
    return db.tag.findUnique({ where: { id } }).receitas()
  }
}
