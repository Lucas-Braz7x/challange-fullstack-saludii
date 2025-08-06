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

  input SearchReceitaInput {
    titulo: String
    ingredientes: String
    categorias: [String]
    tags: [String]
  }

  type Query {
    receitas: [Receita!]!
    receitas(query: SearchReceitaInput): [Receita!]!
    receita(id: String!): Receita
    findBySlug(slug: String!): Receita
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
    createReceita(input: CreateReceitaInput!): Receita!
    updateReceita(id: String!, input: UpdateReceitaInput!): Receita!

    deleteReceita(id: String!): Receita!
  }
`
