import { Suspense } from 'react'

import { CircularProgress } from '@mui/material'

const RecipeTemplate = React.lazy(() => import('src/templates/Recipe'))

const Page = () => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress
            size={80}
            color="primary"
            thickness={5}
            content="Carregando..."
          />
        </div>
      }
    >
      <RecipeTemplate />
    </Suspense>
  )
}

export default Page
