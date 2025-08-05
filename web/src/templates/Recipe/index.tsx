import { useState } from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Receita } from 'types/graphql'

import { useQuery } from '@redwoodjs/web'

import { CardRecipe } from 'src/components/organisms/CardRecipe'
import { FilterForm } from 'src/dto/organisms/FilterForm'
import { LIST_QUERY } from 'src/requests'

export const RecipeTemplates = () => {
  const [dataRecipes, setDataRecipes] = useState<Receita[]>([])
  const { data, updateQuery } = useQuery(LIST_QUERY, {
    onCompleted({ receitas }) {
      setDataRecipes(receitas)
    },
  })

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
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
