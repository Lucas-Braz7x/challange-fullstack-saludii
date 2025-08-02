export const schema = gql`
  type Receita {
    id: String!
    titulo: String!
    ingredientes: String!
    modoPreparo: String!
    tempoPreparo: Int!
    porcoes: Int!
    notaPessoal: String
    slug: String!
    curtidas: Int
    createdAt: DateTime
    updatedAt: DateTime
    categorias: [CategoriaReceita]!
    tags: [TagReceita]!
  }

  type CategoriaReceita {
    receitaId: String!
    categoriaId: String!
    receita: Receita!
    categoria: Categoria!
  }

  type TagReceita {
    receitaId: String!
    tagId: String!
    receita: Receita!
    tag: Tag!
  }

  type Query {
    receitas: [Receita!]! @requireAuth
    receitas(query: String): [Receita!]!
    receita(id: String!): Receita @requireAuth
  }

  input CreateReceitaInput {
    titulo: String!
    ingredientes: String!
    modoPreparo: String!
    tempoPreparo: Int!
    porcoes: Int!
    notaPessoal: String
    slug: String!
    curtidas: Int
    categorias: [String]
    tags: [String]
  }

  input UpdateReceitaInput {
    titulo: String
    ingredientes: String
    modoPreparo: String
    tempoPreparo: Int
    porcoes: Int
    notaPessoal: String
    slug: String
    curtidas: Int
  }

  type Mutation {
    createReceita(input: CreateReceitaInput!): Receita! @requireAuth
    updateReceita(id: String!, input: UpdateReceitaInput!): Receita!
      @requireAuth
    deleteReceita(id: String!): Receita! @requireAuth
  }
`
