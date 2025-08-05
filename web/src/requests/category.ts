import {
  DeleteCategoriaMutation,
  DeleteCategoriaMutationVariables,
  FindCategorias,
} from 'types/graphql'

import { TypedDocumentNode } from '@redwoodjs/web'

const baseRequest = `
  id
  nome
`

export const DELETE_CATEGORIA_MUTATION: TypedDocumentNode<
  DeleteCategoriaMutation,
  DeleteCategoriaMutationVariables
> = gql`
  mutation DeleteCategoriaMutation($id: String!) {
    deleteCategoria(id: $id) {
      id
    }
  }
`

export const LIST_CATEGORIES_QUERY: TypedDocumentNode<FindCategorias> = gql`
  query categorias {
    categorias {
      ${baseRequest}
    }
  }
`
