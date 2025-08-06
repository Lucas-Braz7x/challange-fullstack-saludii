import { useEffect, useState } from 'react'

import './styles.scss'

import { Box, Container, Grid } from '@mui/material'
import { io } from 'socket.io-client'
import { FindReceitas, FindReceitasVariables, Receita } from 'types/graphql'

import { useQuery } from '@redwoodjs/web'

import { CardRecipe } from 'src/components/organisms/CardRecipe'
import { FilterForm } from 'src/components/organisms/FilterForm'
import { Header } from 'src/components/organisms/Header'
import { CreateRecipeModal } from 'src/components/organisms/Modal'
import { LIST_RECIPES_QUERY } from 'src/requests'

export const HomePageTemplate = () => {
  const [dataRecipes, setDataRecipes] = useState<Receita[]>([])
  const { updateQuery } = useQuery<FindReceitas, FindReceitasVariables>(
    LIST_RECIPES_QUERY,
    {
      onCompleted({ receitas }) {
        setDataRecipes(receitas as Receita[])
      },
    }
  )

  const socket = io('http://localhost:5050')

  useEffect(() => {
    socket.on('new-recipe', (data) => {
      console.log('ENTROUY no swocket')
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
  }, [socket, updateQuery])

  return (
    <Container className="container">
      <Header />
      <div className="img-home">Explore receitas deliciosas</div>

      <FilterForm setDataRecipes={setDataRecipes} updateQuery={updateQuery} />

      <div className="create-recipe">
        <CreateRecipeModal />
      </div>

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          sx={{
            marginBottom: '30px',
          }}
        >
          {dataRecipes.map((record) => (
            <Grid size={{ xs: 12, md: 4 }} key={record.slug}>
              <CardRecipe key={record.slug} record={record} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}
