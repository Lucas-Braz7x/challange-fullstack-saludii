import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import FavoriteIcon from '@mui/icons-material/Favorite'
import RoomServiceIcon from '@mui/icons-material/RoomService'
import {
  Box,
  Button,
  Divider,
  Paper,
  Skeleton,
  Typography,
} from '@mui/material'

export const RecipeSkeleton = () => {
  return (
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
      <div
        className="card-header"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div>
          <Skeleton variant="text" width={300} height={40} />
          <Skeleton variant="text" width={200} height={20} />
        </div>
        <Button
          disabled
          style={{ color: '#7c6f64' }}
          size="small"
          color="primary"
          startIcon={<ContentCopyIcon />}
        />
      </div>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>
        Ingredientes
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
        <Skeleton variant="rectangular" width="100%" height={100} />
      </Box>

      <Typography variant="h6" gutterBottom>
        Modo de preparo
      </Typography>

      <Skeleton variant="rectangular" width="100%" height={150} />

      <div
        className="card-body"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '24px',
        }}
      >
        <div>
          <Button
            size="small"
            color="primary"
            disabled
            startIcon={<RoomServiceIcon />}
          >
            <Skeleton width={40} />
          </Button>
          <Button
            size="small"
            color="primary"
            disabled
            startIcon={<AccessTimeIcon />}
          >
            <Skeleton width={40} />
          </Button>
        </div>
        <Button
          size="small"
          color="primary"
          disabled
          startIcon={<FavoriteIcon />}
        >
          <Skeleton width={30} />
        </Button>
      </div>
    </Paper>
  )
}
