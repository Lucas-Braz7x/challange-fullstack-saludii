import { createGraphQLHandler } from '@redwoodjs/graphql-server'

import directives from 'src/directives/**/*.{js,ts}'
import sdls from 'src/graphql/**/*.sdl.{js,ts}'
import services from 'src/services/**/*.{js,ts}'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'
import { categoryPerRecipeLoader, tagPerRecipeLoader } from 'src/loader'

export const handler = createGraphQLHandler({
  loggerConfig: { logger, options: {} },
  directives,
  sdls,
  services,
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect()
  },
  context: {
    loaders: {
      tagPerRecipeLoader,
      categoryPerRecipeLoader,
    },
  },
})

// export const onStartup = async ({ fastify }) => {
//   console.log('Inicializando o socket')
//   // Certifique-se de instalar o plugin de suporte a middlewares, se necessário
//   if (!fastify.hasPlugin('middie')) {
//     await fastify.register(require('@fastify/middie'))
//   }

//   const { Server } = require('socket.io')
//   const io = new Server(fastify.server, {
//     path: '/socket.io',
//     cors: {
//       origin: '*',
//     },
//   })

//   io.on('connection', (socket) => {
//     console.log('Socket conectado:', socket.id)

//     socket.on('like', async ({ receitaId }) => {
//       const recipe = await db.receita.findUnique({ where: { id: receitaId } })

//       if (!recipe) return

//       const recipeUpdated = await db.receita.update({
//         where: { id: receitaId },
//         data: { curtidas: recipe.curtidas + 1 },
//       })

//       io.emit('receita-curtida', recipeUpdated)
//     })
//   })

//   console.log('Socket.IO ativo em /socket.io')
// }
