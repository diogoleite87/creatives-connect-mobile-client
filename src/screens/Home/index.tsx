import { gql, useQuery } from "@apollo/client"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass"
import { faPen } from "@fortawesome/free-solid-svg-icons/faPen"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { useNavigation } from "@react-navigation/native"
import React from "react"
import { RFValue } from "react-native-responsive-fontsize"
import { ButtonConnect } from "../../components/ButtonConnect"
import { ButtonProfile } from "../../components/ButtonProfile"
import { ConnectList } from "../../components/ConnectList"
import { useAuth } from "../../hooks/useAuth"
import {
  Container,
  ContainerButtonConnect,
  ContainerButtonRefresh,
  ContainerButtonSearch,
  ContentBody,
  ContentHeader
} from "./styles"
import { Loading } from "../../components/Loading"

const GET_USER_TIMELINE = gql`
  query getUserTimeline($username: String!) {
    getUserTimeline(username: $username) {
      id
      text
      picture
      createdAt
      likes
      owner {
        name
        username
        picture
        city
      }
    }
  }
`

const Home: React.FC = () => {
  const { authData } = useAuth()

  const navigation = useNavigation()

  const { data, refetch, loading } = useQuery(GET_USER_TIMELINE, {
    variables: { username: authData?.userName! }
  })

  return (
    loading ? <Loading /> :
      < Container >
        <ContentHeader>
          <ButtonConnect />
          <ButtonProfile />
        </ContentHeader>
        <ContentBody>
          {data && <ConnectList connects={data.getUserTimeline} refresh={() => refetch()} />}
        </ContentBody>
        <ContainerButtonSearch
          onPress={() => navigation.navigate("SearchPage" as never)}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size={RFValue(25)}
            color="white"
          />
        </ContainerButtonSearch>
        <ContainerButtonConnect
          onPress={() => navigation.navigate("NewConnectPage" as never)}
        >
          <FontAwesomeIcon icon={faPen} size={RFValue(25)} color="white" />
        </ContainerButtonConnect>
      </Container >
  )
}

export { Home }
