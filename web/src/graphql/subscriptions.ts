export const SNIPPET_COMMENT_SUBSCRIPTION = gql`
  subscription snippetComments($snippetId: Int!) {
    snippetComments(input: { snippetId: $snippetId }) {
      data {
        mutation
        node {
          id
          body
          score
          parentCommentId
          author {
            username
          }
          createdAt
        }
      }
    }
  }
`
