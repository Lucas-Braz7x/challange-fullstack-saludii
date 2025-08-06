/* eslint-disable @typescript-eslint/no-explicit-any */
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

import { Link, routes } from '@redwoodjs/router'

import { useLikeRecipe } from 'src/hooks/useLikeRecipe'
import { socket } from 'src/lib/socket'

import 'dayjs/locale/pt-br'
dayjs.locale('pt-br')

import './styles.scss'

import { BOUNCE_ANIMATION } from './constants'
import { copyLink } from './utils/copyLink'

interface CardRecipeProps {
  record: Receita
}

export const CardRecipe = ({ record }: CardRecipeProps) => {
  const { curtidas, animate, handleLike } = useLikeRecipe(
    socket,
    record?.id,
    record?.curtidas
  )

  const isNew = dayjs().diff(record.createdAt, 'h') < 1

  return (
    <Badge color="success" badgeContent={isNew ? 'Novo' : 0}>
      <Card className="card-container">
        <CardActionArea className="card-bg">
          <CardContent
            sx={{
              height: '128px',
            }}
          >
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
          <Link
            to={routes.receita({ slug: record.slug })}
            title={'View receita ' + record.id}
            className="rw-button rw-button-small "
          >
            <VisibilityIcon fontSize="small" />
          </Link>
          <Button
            size="small"
            color="primary"
            onClick={() => copyLink(record.slug)}
            startIcon={<ContentCopyIcon />}
          />
        </CardActions>
      </Card>
    </Badge>
  )
}
