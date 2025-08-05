import type {
  CreateReceitaMutation,
  CreateReceitaMutationVariables,
  DeleteReceitaMutation,
  DeleteReceitaMutationVariables,
  FindReceitas,
  FindReceitasVariables,
} from 'types/graphql'

import type { TypedDocumentNode } from '@redwoodjs/web'

export const LIST_QUERY: TypedDocumentNode<
  FindReceitas,
  FindReceitasVariables
> = gql`
  query FindReceitas($query: SearchReceitaInput) {
    receitas(query: $query) {
      id
      titulo
      ingredientes
      modoPreparo
      tempoPreparo
      porcoes
      notaPessoal
      slug
      curtidas
      createdAt
      updatedAt
      categorias {
        categoria {
          nome
          id
        }
      }
      tags {
        tag {
          nome
          id
        }
      }
    }
  }
`

export const CREATE_RECIPE_MUTATION: TypedDocumentNode<
  CreateReceitaMutation,
  CreateReceitaMutationVariables
> = gql`
  mutation CreateReceitaMutation($input: CreateReceitaInput!) {
    createReceita(input: $input) {
      id
    }
  }
`

export const DELETE_RECEITA_MUTATION: TypedDocumentNode<
  DeleteReceitaMutation,
  DeleteReceitaMutationVariables
> = gql`
  mutation DeleteReceitaMutation($id: String!) {
    deleteReceita(id: $id) {
      id
    }
  }
`
