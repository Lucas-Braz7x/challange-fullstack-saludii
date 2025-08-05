import { useEffect, useState } from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Receita } from 'types/graphql'

import { useQuery } from '@redwoodjs/web'

import { CardRecipe } from 'src/components/organisms/CardRecipe'
import { CreateRecipeModal } from 'src/components/organisms/Modal'
import { FilterForm } from 'src/dto/organisms/FilterForm'
import { socket } from 'src/lib/socket'
import { LIST_QUERY } from 'src/requests'

export const RecipeTemplates = () => {
  const [dataRecipes, setDataRecipes] = useState<Receita[]>([])
  const { updateQuery } = useQuery(LIST_QUERY, {
    onCompleted({ receitas }) {
      setDataRecipes(receitas)
    },
  })

  useEffect(() => {
    socket.on('new-recipe', (data) => {
      setDataRecipes((prev) => [...prev, data])

      updateQuery((prev) => {
        if (!prev) return prev
        return {
          ...prev,
          receitas: [...prev.receitas, data],
        }
      })
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <CreateRecipeModal />
      <FilterForm />

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {dataRecipes.map((record) => (
            <Grid size={{ xs: 12, md: 4 }} key={record.slug}>
              <CardRecipe
                key={record.slug}
                recipeId={record.id}
                likes={record.curtidas}
                time={record.tempoPreparo}
                title={record.titulo}
                slug={record.slug}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  )
}
