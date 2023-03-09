import { gql } from "@apollo/client"

export const CREATE_USER = gql`
  mutation createUser($userInput: CreateUserInput!) {
    createUser(userInput: $userInput) {
      username
      name
      city
      birthday
      picture
      email
      biography
      createdAt
    }
  }
`

export const DELETE_USER = gql`
  mutation deleteUser($username: String!) {
    deleteUser(username: $username)
  }
`

export const UPDATE_USER = gql`
  mutation updatedUser($username: String!, $updatedUser: CreateUserInput!) {
    updateUser(username: $username, updatedUser: $updatedUser) {
      username
      name
      city
      birthday
      picture
      email
      biography
      createdAt
    }
  }
`

export const FOLLOW_USER = gql`
  mutation followUser($sourceUsername: String!, $sinkUsername: String!) {
    followUser(sourceUsername: $sourceUsername, sinkUsername: $sinkUsername)
  }
`

export const UNFOLLOW_USER = gql`
  mutation unfollowUser($sourceUsername: String!, $sinkUsername: String!) {
    unfollowUser(sourceUsername: $sourceUsername, sinkUsername: $sinkUsernae)
  }
`

export const COMMENT = gql`
  mutation comment(
    $username: String!
    $postId: String!
    $commentInput: CommentInput!
  ) {
    comment(username: $username, postId: $postId, commentInput: $commentInput) {
      id
      text
      createdAt
    }
  }
`

export const DELETE_COMMENT = gql`
  mutation deleteComment($username: String!, $postId: String!, $commentId: String!) {
    deleteComment($username, $postId, $commentId)
  }
`
