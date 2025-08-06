import type {
  CreateReceitaMutation,
  CreateReceitaMutationVariables,
  DeleteReceitaMutation,
  DeleteReceitaMutationVariables,
  FindReceitas,
  FindReceitasVariables,
  QueryfindBySlugArgs,
  UpdateReceitaMutation,
  UpdateReceitaMutationVariables,
} from 'types/graphql'

import type { TypedDocumentNode } from '@redwoodjs/web'

export const LIST_RECIPES_QUERY: TypedDocumentNode<
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

export const UPDATE_RECIPE_MUTATION: TypedDocumentNode<
  UpdateReceitaMutation,
  UpdateReceitaMutationVariables
> = gql`
  mutation UpdateReceitaMutation($id: String!, $input: UpdateReceitaInput!) {
    updateReceita(id: $id, input: $input) {
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
    }
  }
`

export const FIND_BY_SLUG_RECIPE_QUERY: TypedDocumentNode<QueryfindBySlugArgs> = gql`
  query findBySlugQuery($slug: String!) {
    findBySlug(slug: $slug) {
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
