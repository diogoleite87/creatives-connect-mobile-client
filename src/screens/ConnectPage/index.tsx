import { gql, useQuery } from "@apollo/client"
import { faComment } from "@fortawesome/free-regular-svg-icons/faComment"
import { faHeart } from "@fortawesome/free-regular-svg-icons/faHeart"
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons/faHeart"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { RFValue } from "react-native-responsive-fontsize"
import ImageProfileNull from "../../../assets/imageProfileNull.png"
import { ButtonBack } from "../../components/ButtonBack"
import { CommentList } from "../../components/CommentList"
import { Connect as ConnectType } from "../../schemas/Models"
import { timestampToDate } from "../../utils/timestampToDate"
import {
  ConnectImage,
  ConnectText,
  Container,
  ContainerAwesomeIcon,
  ContainerComment,
  ContainerConnectHeader,
  ContainerHeader,
  ContainerProfileFooter,
  ContainerProfileName,
  ProfileImg,
  ProfileName,
  ProfileUser,
  TextDate,
  TextFooter
} from "./styles"

interface propsConnect {
  route?: {
    params: { connect: ConnectType }
  }
}

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

const ConnectPage: React.FC<propsConnect> = ({ route }) => {
  const navigation = useNavigation()

  const [hasLiked, setHasLiked] = useState<boolean>(false)

  const { data } = useQuery(FIND_POST_COMMENTS, {
    variables: { postId: route?.params.connect.id }
  })

  return (
    <Container>
      <ContainerHeader>
        <ButtonBack />
        <ContainerConnectHeader
          onPress={() =>
            navigation.navigate("Profile" as never, {
              username: route?.params.connect.owner.username!
            })
          }
        >
          <ProfileImg
            source={
              route?.params.connect.owner.picture
                ? { uri: route?.params.connect.owner.picture }
                : ImageProfileNull
            }
          />
          <ContainerProfileName>
            <ProfileName>{route?.params.connect.owner.name}</ProfileName>
            <ProfileUser>@{route?.params.connect.owner.username}</ProfileUser>
          </ContainerProfileName>
        </ContainerConnectHeader>
        <ConnectText>{route?.params.connect.text}</ConnectText>
        {route?.params.connect.picture != "undefined" ? (
          <ConnectImage source={{ uri: route?.params.connect.picture }} />
        ) : (
          <></>
        )}
        <TextDate>{timestampToDate(route?.params.connect.createdAt!)}</TextDate>
        <ContainerProfileFooter>
          <ContainerAwesomeIcon
            onPress={() =>
              navigation.navigate("NewCommentPage" as never, {
                connect: route?.params
              })
            }
          >
            <FontAwesomeIcon icon={faComment} size={RFValue(18)} />
            <TextFooter>
              {data ? data.findPostComments.length : 0} comentários
            </TextFooter>
          </ContainerAwesomeIcon>
          <ContainerAwesomeIcon onPress={() => setHasLiked(!hasLiked)}>
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
            <TextFooter>{route?.params.connect.likes} curtidas</TextFooter>
          </ContainerAwesomeIcon>
        </ContainerProfileFooter>
      </ContainerHeader>
      <ContainerComment>
        {data && <CommentList comments={data.findPostComments} />}
      </ContainerComment>
    </Container>
  )
}

export { ConnectPage }
