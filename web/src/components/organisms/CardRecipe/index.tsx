/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'

import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import FavoriteIcon from '@mui/icons-material/Favorite'
import RoomServiceIcon from '@mui/icons-material/RoomService'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { Badge } from '@mui/material'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import dayjs from 'dayjs'
import { Receita } from 'types/graphql'

import { Link } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/toast'

import { socket } from 'src/lib/socket'

import { BOUNCE_ANIMATION } from './constants'
//import { routes } from '@redwoodjs/router'

import 'dayjs/locale/pt-br'
dayjs.locale('pt-br')

import './styles.scss'

interface CardRecipeProps {
  record: Receita
}

export const CardRecipe = ({ record }: CardRecipeProps) => {
  const [curtidas, setCurtidas] = useState(record.curtidas)
  const [animate, setAnimate] = useState(false)

  const handleLike = () => {
    socket.emit('like', { receitaId: record.id })
    setAnimate(true)
    setTimeout(() => setAnimate(false), 300)
  }

  const recipeId = record.id

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

  const isNew = dayjs().diff(record.createdAt, 'h') < 1

  return (
    <Badge color="success" badgeContent={isNew ? 'Novo' : 0}>
      <Card className="card-container">
        <CardActionArea className="card-bg">
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="card-title"
            >
              {record.titulo}
            </Typography>
            <Typography
              variant="body2"
              className="card-text"
              sx={{ marginBottom: '12px' }}
            >
              Postado em{' '}
              {dayjs(record.createdAt).format(
                'D [de] MMMM [de] YYYY [às] HH:mm'
              )}
            </Typography>
            <p
              className="card-text"
              dangerouslySetInnerHTML={{ __html: record.ingredientes }}
            />
          </CardContent>
        </CardActionArea>
        <div className="card-indices">
          <Button
            size="small"
            color="primary"
            onClick={handleLike}
            startIcon={<RoomServiceIcon />}
          >
            {record.porcoes}
          </Button>
          <Button size="small" color="primary" startIcon={<AccessTimeIcon />}>
            {`${record.tempoPreparo} min`}
          </Button>
        </div>
        <CardActions className="card-footer">
          <Button
            size="small"
            color="primary"
            onClick={handleLike}
            className="rw-button-green"
            startIcon={
              <FavoriteIcon
                sx={
                  animate ? { animation: `${BOUNCE_ANIMATION} 0.3s ease` } : {}
                }
              />
            }
          >
            ({curtidas})
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => copyLink(record.slug)}
            startIcon={<ContentCopyIcon />}
          />

          <Link
            to={'/'}
            title={'Edit receita ' + record.id}
            className="rw-button rw-button-small "
          >
            <VisibilityIcon fontSize="small" />
          </Link>
        </CardActions>
      </Card>
    </Badge>
  )
}
