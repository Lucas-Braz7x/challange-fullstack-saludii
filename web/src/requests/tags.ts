import { FindTags } from 'types/graphql'

import { TypedDocumentNode } from '@redwoodjs/web'

const baseRequest = `
  id
  nome
`

export const LIST_TAGS_QUERY: TypedDocumentNode<FindTags> = gql`
  query tags {
    tags {
      ${baseRequest}
    }
  }
`
