/* eslint-disable @typescript-eslint/no-explicit-any */
//import { NotFoundError } from './../../error/not-found'
import { db } from './lib/db'

const { createServer } = require('http')

const { Server } = require('socket.io')

const httpServer = createServer()

export const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
})

io.on('connection', (socket: any) => {
  console.log('Novo cliente conectado:', socket.id)

  socket.on('like', async ({ receitaId }: any) => {
    console.log('Mandou pro server via socket', receitaId)

    const recipe = await db.receita.findUnique({
      where: { id: receitaId },
    })

    if (!recipe) {
      throw new Error()
    }

    const recipeUpdated = await db.receita.update({
      where: { id: recipe.id },
      data: { curtidas: recipe.curtidas + 1 },
    })

    console.log('Receita curtida', recipeUpdated.curtidas)

    io.emit('receita-curtida', recipeUpdated)
  })

  socket.on('disconnect', () => {
    console.log('Cliente desconectado:', socket.id)
  })
})

httpServer.listen(5050, () => {
  console.log('Socket.IO rodando em http://localhost:5050')
})
