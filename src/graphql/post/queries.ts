import { gql } from "@apollo/client"

export const FIND_POST_BY_ID = gql`
  query findPostById($id: String!) {
    findPostById(id: $id) {
      id
      text
      picture
      createdAt
      likes
    }
  }
`

export const FIND_USER_POSTS = gql`
  query findUserPosts($username: String!) {
    findUserPosts(username: $username) {
      id
      text
      picture
      createdAt
      likes
    }
  }
`

export const FIND_POST_COMMENTS = gql`
  query findPostComments($postId: String!) {
    findPostComments(postId: $postId) {
      id
      text
      createdAt
    }
  }
`

export const GET_USER_TIMELINE = gql`
  query getUserTimeline($username: String!) {
    getUserTimeline(username: $username) {
      text
      picture
      createdAt
      likes
      timestamp
    }
  }
`
