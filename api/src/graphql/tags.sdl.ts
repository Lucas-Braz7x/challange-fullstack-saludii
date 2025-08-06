export const schema = gql`
  type Tag {
    id: String!
    nome: String!
    receitas: [TagReceita]!
  }

  type Query {
    tags: [Tag!]! @skipAuth
    tag(id: String!): Tag @skipAuth
  }

  input CreateTagInput {
    nome: String!
  }

  input UpdateTagInput {
    nome: String
  }

  type Mutation {
    createTag(input: CreateTagInput!): Tag! @skipAuth
    updateTag(id: String!, input: UpdateTagInput!): Tag! @skipAuth
    deleteTag(id: String!): Tag! @skipAuth
  }
`
