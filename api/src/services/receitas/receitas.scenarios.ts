import type { Prisma, Receita } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ReceitaCreateArgs>({
  receita: {
    one: {
      data: {
        titulo: 'String',
        ingredientes: 'String',
        modoPreparo: 'String',
        tempoPreparo: 4115950,
        porcoes: 6692429,
        slug: 'String4454989',
      },
    },
    two: {
      data: {
        titulo: 'String',
        ingredientes: 'String',
        modoPreparo: 'String',
        tempoPreparo: 6445740,
        porcoes: 774570,
        slug: 'String9301271',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Receita, 'receita'>
