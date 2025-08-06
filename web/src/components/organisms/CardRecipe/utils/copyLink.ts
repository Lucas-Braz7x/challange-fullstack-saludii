import { toast } from '@redwoodjs/web/toast'

export const copyLink = (slug: string) => {
  const url = `${window.location.origin}/receitas/${slug}`
  navigator.clipboard
    .writeText(url)
    .then(() => {})
    .catch((err) => {
      console.error('Erro ao copiar:', err)
    })
  toast.success('Link copiado', {
    position: 'bottom-right',
    style: {
      zIndex: 10000,
    },
  })
}
