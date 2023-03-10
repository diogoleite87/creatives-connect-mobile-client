import { ApolloClient, InMemoryCache } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { createHttpLink } from "@apollo/client/link/http/createHttpLink"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { AuthData } from "../schemas/Models"

const httpLink = createHttpLink({
  uri: `http://192.168.2.15:3000/graphql`
})

const authLink = setContext(async (_, { headers }) => {
  let authData: AuthData = {} as AuthData
  const res = await AsyncStorage.getItem("@AuthData")

  if (res) {
    authData = JSON.parse(res)
  }

  return {
    headers: {
      ...headers,
      Authorization: authData.token ? `Bearer ${authData.token}` : ""
    }
  }
})

const link = authLink.concat(httpLink)

export const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache"
    },
    query: {
      fetchPolicy: "no-cache"
    }
  }
})
