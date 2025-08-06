import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Skeleton,
} from '@mui/material'

export const CardSkeleton = () => {
  return (
    <Card style={{ background: '#fef7ea' }}>
      <CardActionArea>
        <CardContent>
          <Skeleton variant="text" height={32} width="60%" />
          <Skeleton variant="text" height={20} width="40%" sx={{ mb: 1 }} />
          <Skeleton
            variant="rectangular"
            height={80}
            sx={{ borderRadius: 1, mb: 1 }}
          />
        </CardContent>
      </CardActionArea>

      <div
        style={{ display: 'flex', gap: 8, padding: 8, background: '#fef7ea' }}
      >
        <Skeleton variant="rectangular" height={36} width={100} />
        <Skeleton variant="rectangular" height={36} width={100} />
      </div>

      <CardActions className="card-footer">
        <Skeleton variant="circular" width={36} height={36} />
        <Skeleton variant="circular" width={36} height={36} />
        <Skeleton variant="circular" width={36} height={36} />
      </CardActions>
    </Card>
  )
}
