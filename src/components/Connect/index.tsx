import React from "react"

import { gql, useQuery } from "@apollo/client"
import { faComment } from "@fortawesome/free-regular-svg-icons/faComment"
import { faHeart } from "@fortawesome/free-regular-svg-icons/faHeart"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { useNavigation } from "@react-navigation/native"
import { RFValue } from "react-native-responsive-fontsize"
import ImageProfileNull from "../../../assets/imageProfileNull.png"
import { Connect as ConnectType } from "../../schemas/Models"
import { ContainerAwesomeIcon } from "../../screens/Profile/styles"
import { timestampToDate } from "../../utils/timestampToDate"
import {
  ConnectImage,
  ConnectText,
  Container,
  ContainerProfileFooter,
  ContainerProfileHeader,
  ContainerProfileName,
  ProfileImg,
  ProfileName,
  ProfileUser,
  TextDate,
  TextFooter
} from "./styles"

const FIND_POST_COMMENTS = gql`
  query findPostComments($postId: String!) {
    findPostComments(postId: $postId) {
      id
      text
      createdAt
      owner {
        name
        username
        picture
      }
    }
  }
`

interface connectProps {
  connectItem: ConnectType
}

const Connect: React.FC<connectProps> = ({ connectItem }) => {
  const navigation = useNavigation()

  const navigate = () => {
    console.log(connectItem)
    navigation.navigate("ConnectPage", { connect: connectItem })
  }

  const { data } = useQuery(FIND_POST_COMMENTS, {
    variables: { postId: connectItem.id }
  })

  return (
    <Container onPress={navigate}>
      <>
        <ContainerProfileHeader>
          <ProfileImg
            source={
              connectItem.owner.picture
                ? { uri: connectItem.owner.picture }
                : ImageProfileNull
            }
          />
          <ContainerProfileName>
            <ProfileName>{connectItem.owner.name}</ProfileName>
            <ProfileUser>@{connectItem.owner.username}</ProfileUser>
          </ContainerProfileName>
        </ContainerProfileHeader>
        <ConnectText>{connectItem.text}</ConnectText>
      </>
      {connectItem.picture != "undefined" ? (
        <ConnectImage source={{ uri: connectItem.picture }} />
      ) : (
        <></>
      )}
      <TextDate>{timestampToDate(connectItem.createdAt)}</TextDate>
      <ContainerProfileFooter>
        <ContainerAwesomeIcon>
          <FontAwesomeIcon icon={faComment} size={RFValue(18)} />
          <TextFooter>
            {data ? data.findPostComments.length : 0} comentários
          </TextFooter>
        </ContainerAwesomeIcon>
        <ContainerAwesomeIcon>
          <FontAwesomeIcon icon={faHeart} size={RFValue(18)} color="black" />
          <TextFooter>{connectItem.likes} curtidas</TextFooter>
        </ContainerAwesomeIcon>
      </ContainerProfileFooter>
    </Container>
  )
}

export { Connect }
