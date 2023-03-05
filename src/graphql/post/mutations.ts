import { gql } from "@apollo/client"

export const CREATE_POST = gql`
  mutation createPost($username: String!, $postInput: CreatePostInput!) {
    createPost(username: $username, postInput: $postInput) {
      id
      text
      picture
      createdAt
      likes
    }
  }
`

export const UPDATE_POST = gql`
  mutation updatePost($postId: String!, $updatePost: CreatePostInput!) {
    updatePost(postId: $postId, updatePost: $updatePost) {
      id
      text
      picture
      createdAt
      likes
    }
  }
`

export const DELETE_POST = gql`
  mutation deletePost($postId: String!) {
    deletePost(postId: $postId)
  }
`
