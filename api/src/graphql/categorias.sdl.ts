export const schema = gql`
  type Categoria {
    id: String!
    nome: String!
    receitas: [CategoriaReceita]!
  }

  type Query {
    categorias: [Categoria!]! @requireAuth
    categoria(id: String!): Categoria @requireAuth
  }

  input CreateCategoriaInput {
    nome: String!
  }

  input UpdateCategoriaInput {
    nome: String
  }

  type Mutation {
    createCategoria(input: CreateCategoriaInput!): Categoria! @requireAuth
    updateCategoria(id: String!, input: UpdateCategoriaInput!): Categoria!
      @requireAuth
    deleteCategoria(id: String!): Categoria! @requireAuth
  }
`
