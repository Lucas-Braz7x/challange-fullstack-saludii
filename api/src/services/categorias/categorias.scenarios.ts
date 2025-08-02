import type { Prisma, Categoria } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CategoriaCreateArgs>({
  categoria: {
    one: { data: { nome: 'String' } },
    two: { data: { nome: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Categoria, 'categoria'>
