import { gql } from "@apollo/client"

export const FIND_USER_BY_USERNAME = gql`
  query findUserByUsername($username: String!) {
    findUserByUsername(username: $username) {
      username
      name
      city
      birthday
      picture
      biography
    }
  }
`

export const FIND_ALL_USERS = gql`
  query findAll {
    findAll {
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

export const FIND_USER_FOLLOWERS = gql`
  query findUserFollowers($username: String!) {
    findUserFollowers(username: $username) {
      username
      name
      city
      biography
      birthday
      picture
      email
      createdAt
    }
  }
`

export const FOLLOWEDS_BY_USER = gql`
  query findFollowedsByUser($username: String!) {
    findFollowedsByUser(username: $username) {
      username
      name
      city
      biography
      birthday
      picture
      email
      createdAt
    }
  }
`
