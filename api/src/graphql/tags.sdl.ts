export const schema = gql`
  type Tag {
    id: String!
    nome: String!
    receitas: [TagReceita]!
  }

  type Query {
<<<<<<< HEAD
    tags: [Tag!]! @skipAuth
    tag(id: String!): Tag @skipAuth
=======
    tags: [Tag!]!
    tag(id: String!): Tag
>>>>>>> 4215c28fd37e77247247d1c334d1f6dfa4b23fb8
  }

  input CreateTagInput {
    nome: String!
  }

  input UpdateTagInput {
    nome: String
  }

  type Mutation {
<<<<<<< HEAD
    createTag(input: CreateTagInput!): Tag! @skipAuth
    updateTag(id: String!, input: UpdateTagInput!): Tag! @skipAuth
    deleteTag(id: String!): Tag! @skipAuth
=======
    createTag(input: CreateTagInput!): Tag!
    updateTag(id: String!, input: UpdateTagInput!): Tag!
    deleteTag(id: String!): Tag!
>>>>>>> 4215c28fd37e77247247d1c334d1f6dfa4b23fb8
  }
`
