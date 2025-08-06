import { io } from 'socket.io-client'

// export const socket = io('http://localhost:8911', {
//   path: '/socket.io',
// })

export const socket = io(
  import.meta.env.VITE_API_URL || 'http://localhost:5050'
)
