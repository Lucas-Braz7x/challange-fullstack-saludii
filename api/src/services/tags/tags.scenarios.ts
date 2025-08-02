import type { Prisma, Tag } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TagCreateArgs>({
  tag: { one: { data: { nome: 'String' } }, two: { data: { nome: 'String' } } },
})

export type StandardScenario = ScenarioData<Tag, 'tag'>
