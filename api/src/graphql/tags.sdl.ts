export const schema = gql`
  type Tag {
    id: String!
    nome: String!
    receitas: [TagReceita]!
  }

  type Query {
    tags: [Tag!]!
    tag(id: String!): Tag
  }

  input CreateTagInput {
    nome: String!
  }

  input UpdateTagInput {
    nome: String
  }

  type Mutation {
    createTag(input: CreateTagInput!): Tag!
    updateTag(id: String!, input: UpdateTagInput!): Tag!
    deleteTag(id: String!): Tag!
  }
`
