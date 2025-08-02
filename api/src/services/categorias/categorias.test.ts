import type { Categoria } from '@prisma/client'

import {
  categorias,
  categoria,
  createCategoria,
  updateCategoria,
  deleteCategoria,
} from './categorias'
import type { StandardScenario } from './categorias.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('categorias', () => {
  scenario('returns all categorias', async (scenario: StandardScenario) => {
    const result = await categorias()

    expect(result.length).toEqual(Object.keys(scenario.categoria).length)
  })

  scenario('returns a single categoria', async (scenario: StandardScenario) => {
    const result = await categoria({ id: scenario.categoria.one.id })

    expect(result).toEqual(scenario.categoria.one)
  })

  scenario('creates a categoria', async () => {
    const result = await createCategoria({
      input: { nome: 'String' },
    })

    expect(result.nome).toEqual('String')
  })

  scenario('updates a categoria', async (scenario: StandardScenario) => {
    const original = (await categoria({
      id: scenario.categoria.one.id,
    })) as Categoria
    const result = await updateCategoria({
      id: original.id,
      input: { nome: 'String2' },
    })

    expect(result.nome).toEqual('String2')
  })

  scenario('deletes a categoria', async (scenario: StandardScenario) => {
    const original = (await deleteCategoria({
      id: scenario.categoria.one.id,
    })) as Categoria
    const result = await categoria({ id: original.id })

    expect(result).toEqual(null)
  })
})
