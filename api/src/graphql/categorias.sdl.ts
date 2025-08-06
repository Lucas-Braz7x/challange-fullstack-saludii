export const schema = gql`
  type Categoria {
    id: String!
    nome: String!
    receitas: [CategoriaReceita]!
  }

  type Query {
    categorias: [Categoria!]! @skipAuth
    categoria(id: String!): Categoria @skipAuth
  }

  input CreateCategoriaInput {
    nome: String!
  }

  input UpdateCategoriaInput {
    nome: String
  }

  type Mutation {
    createCategoria(input: CreateCategoriaInput!): Categoria! @skipAuth
    updateCategoria(id: String!, input: UpdateCategoriaInput!): Categoria!
      @skipAuth
    deleteCategoria(id: String!): Categoria! @skipAuth
  }
`
