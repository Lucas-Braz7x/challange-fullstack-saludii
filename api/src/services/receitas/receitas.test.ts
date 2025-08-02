import type { Receita } from '@prisma/client'

import {
  receitas,
  receita,
  createReceita,
  updateReceita,
  deleteReceita,
} from './receitas'
import type { StandardScenario } from './receitas.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('receitas', () => {
  scenario('returns all receitas', async (scenario: StandardScenario) => {
    const result = await receitas()

    expect(result.length).toEqual(Object.keys(scenario.receita).length)
  })

  scenario('returns a single receita', async (scenario: StandardScenario) => {
    const result = await receita({ id: scenario.receita.one.id })

    expect(result).toEqual(scenario.receita.one)
  })

  scenario('creates a receita', async () => {
    const result = await createReceita({
      input: {
        titulo: 'String',
        ingredientes: 'String',
        modoPreparo: 'String',
        tempoPreparo: 4504308,
        porcoes: 5673736,
        slug: 'String4566307',
      },
    })

    expect(result.titulo).toEqual('String')
    expect(result.ingredientes).toEqual('String')
    expect(result.modoPreparo).toEqual('String')
    expect(result.tempoPreparo).toEqual(4504308)
    expect(result.porcoes).toEqual(5673736)
    expect(result.slug).toEqual('String4566307')
  })

  scenario('updates a receita', async (scenario: StandardScenario) => {
    const original = (await receita({ id: scenario.receita.one.id })) as Receita
    const result = await updateReceita({
      id: original.id,
      input: { titulo: 'String2' },
    })

    expect(result.titulo).toEqual('String2')
  })

  scenario('deletes a receita', async (scenario: StandardScenario) => {
    const original = (await deleteReceita({
      id: scenario.receita.one.id,
    })) as Receita
    const result = await receita({ id: original.id })

    expect(result).toEqual(null)
  })
})
