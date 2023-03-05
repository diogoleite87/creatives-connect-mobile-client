import { ApolloClient, InMemoryCache } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { createHttpLink } from "@apollo/client/link/http/createHttpLink"
import AsyncStorage from "@react-native-async-storage/async-storage"

const httpLink = createHttpLink({
  uri: `http://${process.env.BASE_URL}:3000/graphql`
})

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem("@AuthData")
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ""
    }
  }
})

const link = authLink.concat(httpLink)

export const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
})
