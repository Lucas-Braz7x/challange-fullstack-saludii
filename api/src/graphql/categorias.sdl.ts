export const schema = gql`
  type Categoria {
    id: String!
    nome: String!
    receitas: [CategoriaReceita]!
  }

  type Query {
    categorias: [Categoria!]!
    categoria(id: String!): Categoria
  }

  input CreateCategoriaInput {
    nome: String!
  }

  input UpdateCategoriaInput {
    nome: String
  }

  type Mutation {
<<<<<<< HEAD
    createCategoria(input: CreateCategoriaInput!): Categoria! @skipAuth
    updateCategoria(id: String!, input: UpdateCategoriaInput!): Categoria!
      @skipAuth
    deleteCategoria(id: String!): Categoria! @skipAuth
=======
    createCategoria(input: CreateCategoriaInput!): Categoria!
    updateCategoria(id: String!, input: UpdateCategoriaInput!): Categoria!

    deleteCategoria(id: String!): Categoria!
>>>>>>> 4215c28fd37e77247247d1c334d1f6dfa4b23fb8
  }
`
