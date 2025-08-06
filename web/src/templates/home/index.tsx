import { useEffect, useState } from 'react'

import './styles.scss'

import { Box, Container, Grid } from '@mui/material'
import { io } from 'socket.io-client'
import { FindReceitas, FindReceitasVariables, Receita } from 'types/graphql'

import { useQuery } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { CardRecipe } from 'src/components/organisms/CardRecipe'
import { CardSkeleton } from 'src/components/organisms/CardRecipe/components/CardSkeleton'
import { FilterForm } from 'src/components/organisms/FilterForm'
import { Header } from 'src/components/organisms/Header'
import { CreateRecipeModal } from 'src/components/organisms/Modal'
import { LIST_RECIPES_QUERY } from 'src/requests'

export const HomePageTemplate = () => {
  const [dataRecipes, setDataRecipes] = useState<Receita[]>([])
  const { loading, updateQuery } = useQuery<
    FindReceitas,
    FindReceitasVariables
  >(LIST_RECIPES_QUERY, {
    onCompleted({ receitas }) {
      setDataRecipes(receitas as Receita[])
      toast.success('Receitas carregadas com sucesso!')
    },
    onError() {
      toast.success('Error ao carregar Receitas!')
    },
  })

  const socket = io('http://localhost:5050')

  useEffect(() => {
    socket.on('new-recipe', (data) => {
      console.log({ data })
      setDataRecipes((prev) => [data, ...prev])
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
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <CardSkeleton />
                </Grid>
              ))
            : dataRecipes.map((record) => (
                <Grid size={{ xs: 12, md: 4 }} key={record.slug}>
                  <CardRecipe key={record.slug} record={record} />
                </Grid>
              ))}
        </Grid>
      </Box>
    </Container>
  )
}
