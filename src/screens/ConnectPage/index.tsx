import { gql, useMutation, useQuery } from "@apollo/client"
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
import { useAuth } from "../../hooks/useAuth"

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

const USER_LIKED_POST = gql`
  query userLikedPost($username: String!, $postId: String!){
    userLikedPost(username: $username, postId: $postId)
  }
`

const LIKE_POST = gql`
    mutation likePost($username: String!, $postId: String!) {
        likePost(username: $username, postId: $postId)
    }
`

const UNLIKE_POST = gql`
    mutation unlikePost($username: String!, $postId: String!) {
        unlikePost(username: $username, postId: $postId)
    }
`

const ConnectPage: React.FC<propsConnect> = ({ route }) => {
    const navigation = useNavigation()
    const { authData } = useAuth()

    const [hasLiked, setHasLiked] = useState<boolean>(false)
    const [likes, setLikes] = useState<number>(route?.params.connect.likes as number)
    const username = authData?.userName

    const { data } = useQuery(FIND_POST_COMMENTS, {
        variables: { postId: route?.params.connect.id }
    })

    const { } = useQuery(USER_LIKED_POST, {
        variables: { username: username, postId: route?.params.connect.id },
        onCompleted(data) {
            setHasLiked(data.userLikedPost)
        },
    })

    const [likePost, { }] = useMutation(LIKE_POST, {
        variables: { username: username, postId: route?.params.connect.id },
        onCompleted(data, clientOptions) {
            setHasLiked(true)
            setLikes(likes + 1)

        },
    })

    const [unlikePost, { }] = useMutation(UNLIKE_POST, {
        variables: { username: username, postId: route?.params.connect.id },
        onCompleted(data, clientOptions) {
            setHasLiked(false)
            setLikes(likes - 1)
        },
    })

    const submitLike = async () => {

        hasLiked ? unlikePost() : likePost()
    }

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
                            route?.params.connect.owner.picture != "undefined"
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
                    <ContainerAwesomeIcon onPress={submitLike}>
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
                        <TextFooter>{likes} curtidas</TextFooter>
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
