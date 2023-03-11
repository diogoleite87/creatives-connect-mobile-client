import React, { useState } from "react"

import { gql, useQuery } from "@apollo/client"
import { faComment } from "@fortawesome/free-regular-svg-icons/faComment"
import { faHeart } from "@fortawesome/free-regular-svg-icons/faHeart"
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons/faHeart"
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash"
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
  ContainerProfile,
  ContainerProfileFooter,
  ContainerProfileHeader,
  ContainerProfileName,
  ProfileImg,
  ProfileName,
  ProfileUser,
  TextDate,
  TextFooter
} from "./styles"
import { useAuth } from "../../hooks/useAuth"

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

const USER_LIKED_POST = gql`
  query userLikedPost($username: String!, $postId: String!){
    userLikedPost(username: $username, postId: $postId)
  }
`

const Connect: React.FC<connectProps> = ({ connectItem }) => {

  const { authData } = useAuth()
  const navigation = useNavigation()

  const [hasLiked, setHasLiked] = useState<boolean>(false)
  const username = authData?.userName

  const navigate = () => {
    navigation.navigate("ConnectPage", { connect: connectItem })
  }

  const { data } = useQuery(FIND_POST_COMMENTS, {
    variables: { postId: connectItem.id }
  })

  const { } = useQuery(USER_LIKED_POST, {
    variables: { username: username, postId: connectItem.id },
    onCompleted(data) {
      setHasLiked(data.userLikedPost)
    },
  })


  return (
    <Container onPress={navigate}>
      <>
        <ContainerProfileHeader>
          <ContainerProfile>
            <ProfileImg
              source={
                connectItem.owner.picture != "undefined"
                  ? { uri: connectItem.owner.picture }
                  : ImageProfileNull
              }
            />
            <ContainerProfileName>
              <ProfileName>{connectItem.owner.name}</ProfileName>
              <ProfileUser>@{connectItem.owner.username}</ProfileUser>
            </ContainerProfileName>
          </ContainerProfile>
          {connectItem.owner.username == authData?.userName ? <FontAwesomeIcon
            icon={faTrash}
            size={RFValue(16)}
            color="red"
          /> : <></>}

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
          {hasLiked ? (
            <FontAwesomeIcon
              icon={faHeartSolid}
              size={RFValue(18)}
              color="red"
            />
          ) : (
            <FontAwesomeIcon
              icon={faHeart}
              size={RFValue(18)}
              color="black"
            />
          )}
          <TextFooter>{connectItem.likes} curtidas</TextFooter>
        </ContainerAwesomeIcon>
      </ContainerProfileFooter>
    </Container>
  )
}

export { Connect }
