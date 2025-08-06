import * as React from 'react'

import AddIcon from '@mui/icons-material/Add'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import { CreateReceitaInput } from 'types/graphql'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { CREATE_RECIPE_MUTATION } from 'src/requests'

import { RecipeForm } from '../RecipeForm'

import { style } from './contants'

export const CreateRecipeModal = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [createReceita, { loading, error }] = useMutation(
    CREATE_RECIPE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Receita created')
        //navigate(routes.receitas())
      },
      onError: (error) => {
        console.log(error)
        toast.error('TESTE')
      },
    }
  )

  const onSave = async (input: CreateReceitaInput) => {
    await createReceita({
      variables: { input },
    })
  }

  return (
    <div>
      <Button
        style={{
          background: '#38a169',
        }}
        onClick={handleOpen}
        className="rw-button rw-button-green"
        endIcon={<AddIcon />}
      >
        Criar receita
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" mb={2}>
            Criar uma nova receita
          </Typography>
          <RecipeForm
            onSave={onSave}
            loading={loading}
            error={error}
            handleClose={handleClose}
          />
        </Box>
      </Modal>
    </div>
  )
}
