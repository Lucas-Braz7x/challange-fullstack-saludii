export const schema = gql`
  type Tag {
    id: String!
    nome: String!
    receitas: [TagReceita]!
  }

  type Query {
    tags: [Tag!]! @requireAuth
    tag(id: String!): Tag @requireAuth
  }

  input CreateTagInput {
    nome: String!
  }

  input UpdateTagInput {
    nome: String
  }

  type Mutation {
    createTag(input: CreateTagInput!): Tag! @requireAuth
    updateTag(id: String!, input: UpdateTagInput!): Tag! @requireAuth
    deleteTag(id: String!): Tag! @requireAuth
  }
`
