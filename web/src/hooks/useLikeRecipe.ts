/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'

export const useLikeRecipe = (
  socket: any,
  receitaId?: string,
  likes?: number
) => {
  const [curtidas, setCurtidas] = useState<number>(likes || 0)
  const [animate, setAnimate] = useState(false)

  const handleLike = () => {
    socket.emit('like', { receitaId })
    setAnimate(true)
    setTimeout(() => setAnimate(false), 300)
  }

  useEffect(() => {
    if (likes !== undefined) {
      setCurtidas(likes)
    }
  }, [likes])

  useEffect(() => {
    if (!receitaId) return
    let timeoutId: ReturnType<typeof setTimeout>

    const atualizarCurtidas = (record: any) => {
      if (record.id === receitaId) {
        setCurtidas(record.curtidas)
        setAnimate(true)
        timeoutId = setTimeout(() => setAnimate(false), 300)
      }
    }

    socket.on('receita-curtida', atualizarCurtidas)

    return () => {
      socket.off('receita-curtida', atualizarCurtidas)
      clearTimeout(timeoutId)
    }
  }, [receitaId, socket])

  return { curtidas, animate, handleLike }
}
