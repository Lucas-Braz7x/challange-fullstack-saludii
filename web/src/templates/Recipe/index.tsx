import { useEffect } from 'react'

import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import FavoriteIcon from '@mui/icons-material/Favorite'
import RoomServiceIcon from '@mui/icons-material/RoomService'
import { Box, Button, Divider, Paper, Typography } from '@mui/material'
import Highlight from '@tiptap/extension-highlight'
import TypographyTEste from '@tiptap/extension-typography'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Markdown } from 'tiptap-markdown'
import { Receita } from 'types/graphql'

import { useParams } from '@redwoodjs/router'
import { useQuery } from '@redwoodjs/web'

import './styles.scss'

import { BOUNCE_ANIMATION } from 'src/components/organisms/CardRecipe/constants'
import { copyLink } from 'src/components/organisms/CardRecipe/utils/copyLink'
import { useLikeRecipe } from 'src/hooks/useLikeRecipe'
import { socket } from 'src/lib/socket'
import { FIND_BY_SLUG_RECIPE_QUERY } from 'src/requests'

import { RecipeSkeleton } from './components/RecipeSkeleton'

interface FindBySlugRecipeQueryProps {
  findBySlug: Receita
}

const RecipeTemplate = () => {
  const { slug } = useParams()

  console.log({ slug })

  const { data, loading } = useQuery<FindBySlugRecipeQueryProps>(
    FIND_BY_SLUG_RECIPE_QUERY,
    {
      variables: {
        slug,
      },
    }
  )

  const receita = data?.findBySlug
  const { curtidas, animate, handleLike } = useLikeRecipe(
    socket,
    receita?.id,
    receita?.curtidas
  )

  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      TypographyTEste,
      Markdown.configure({
        transformCopiedText: true,
        transformPastedText: true,
      }),
    ],
    editable: false,
  })

  const editorModo = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      TypographyTEste,
      Markdown.configure({
        transformCopiedText: true,
        transformPastedText: true,
      }),
    ],
    editable: false,
  })

  useEffect(() => {
    if (data?.findBySlug) {
      editor?.commands.setContent(data.findBySlug.ingredientes)
      editorModo?.commands.setContent(data.findBySlug.modoPreparo)
    }
  }, [data, editor, editorModo])

  return loading ? (
    <RecipeSkeleton />
  ) : (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        maxWidth: 800,
        margin: 'auto',
        mt: 4,
        background: '#fef7ea',
        color: '#a98467',
      }}
    >
      <div className="card-header">
        <div>
          <Typography variant="h4" gutterBottom>
            {receita?.titulo}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Criado em {new Date(receita?.createdAt).toLocaleDateString()}
          </Typography>
        </div>
        <Button
          style={{ color: '#7c6f64' }}
          size="small"
          color="primary"
          onClick={() => copyLink(slug)}
          startIcon={<ContentCopyIcon />}
        />
      </div>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>
        Ingredientes
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
        <EditorContent editor={editor} disabled />
      </Box>

      <Typography variant="h6" gutterBottom>
        Modo de Preparo
      </Typography>

      <EditorContent editor={editorModo} disabled />

      <div className="card-body">
        <div>
          <Button size="small" color="primary" startIcon={<RoomServiceIcon />}>
            {receita?.porcoes}
          </Button>
          <Button size="small" color="primary" startIcon={<AccessTimeIcon />}>
            {`${receita?.tempoPreparo} min`}
          </Button>
        </div>
        <Button
          size="small"
          color="primary"
          className="rw-button-green"
          startIcon={<FavoriteIcon />}
          onClick={handleLike}
          sx={{
            animation: animate ? `${BOUNCE_ANIMATION} 0.3s ease` : undefined,
          }}
        >
          ({curtidas})
        </Button>
      </div>
    </Paper>
  )
}

export default RecipeTemplate
