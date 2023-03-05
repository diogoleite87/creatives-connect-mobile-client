import { useQuery } from "@apollo/client"
import React from "react"
import { Text, View } from "react-native"
import {
  FindUserByUsernameQuery,
  FindUserByUsernameQueryVariables
} from "../../generated/api-types"
import { FIND_USER_BY_USERNAME } from "../../graphql/user/queries"

export const Showcase: React.FC = () => {
  const { data, error, loading } = useQuery<
    FindUserByUsernameQuery,
    FindUserByUsernameQueryVariables
  >(FIND_USER_BY_USERNAME, {
    variables: { username: "filixi" }
  })

  if (loading) return <Text>Carregando...</Text>

  if (error) {
    console.log(error)
    return <Text>Deu erro!</Text>
  }

  return (
    <View>
      <Text>{data?.findUserByUsername.name}</Text>
      <Text>{data?.findUserByUsername.biography}</Text>
      <Text>{data?.findUserByUsername.city}</Text>
      <Text>{data?.findUserByUsername.username}</Text>
      <Text>{data?.findUserByUsername.email}</Text>
    </View>
  )
}
