/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react'

import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUp'
import VisibilityIcon from '@mui/icons-material/Visibility'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import { routes } from '@redwoodjs/router'
import { Link } from '@redwoodjs/router'

import { socket } from 'src/lib/socket'

interface CardRecipeProps {
  likes: number
  time: number
  recipeId: string
  title: string
  slug: string
}

export const CardRecipe = ({
  likes,
  time,
  recipeId,
  title,
  slug,
}: CardRecipeProps) => {
  const [curtidas, setCurtidas] = useState(likes)

  const curtir = () => socket.emit('like', { receitaId: recipeId })

  useEffect(() => {
    const atualizarCurtidas = (record: any) => {
      if (record.id === recipeId) {
        setCurtidas(record.curtidas)
      }
    }

    socket.on('receita-curtida', atualizarCurtidas)

    return () => {
      socket.off('receita-curtida', atualizarCurtidas)
    }
  }, [recipeId])

  const copyLink = (slug: string) => {
    const url = `${window.location.origin}/receitas/${slug}`
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert('Link copiado!')
      })
      .catch((err) => {
        console.error('Erro ao copiar:', err)
      })
  }

  return (
    <Card sx={{ minWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={curtir}>
          {curtidas}
        </Button>
        <Button size="small" color="primary">
          {`${time} min`}
        </Button>
        <Button size="small" color="primary" onClick={curtir}>
          <ThumbUpOffAltIcon />
        </Button>
        <Button size="small" color="primary" onClick={() => copyLink(slug)}>
          <ContentCopyIcon />
        </Button>
        <Link
          to={routes.editReceita({ id: recipeId })}
          title={'Edit receita ' + recipeId}
          className="rw-button rw-button-small rw-button-blue"
        >
          <VisibilityIcon />
        </Link>
        {/* <Button size="small" color="primary" onClick={show}>
        </Button> */}
      </CardActions>
    </Card>
  )
}
