import { ApolloProvider } from "@apollo/client/react"
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { Text, View } from "react-native"
import { useAuth } from "../hooks/useAuth"
import { client } from "../providers/api"
import { AppStack } from "./AppStack"
import { AuthStack } from "./AuthStack"

export function Router() {
  const { authData, loading } = useAuth()

  if (loading) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>Carregando informações....</Text>
      </View>
    )
  }
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        {/* {authData ? <AppStack /> : <AuthStack />} */}
        {authData ? <AuthStack /> : <AppStack />}
      </NavigationContainer>
    </ApolloProvider>
  )
}
