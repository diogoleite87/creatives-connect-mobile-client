import React, { useEffect, useState } from "react"
import { Container, ContainerHeader, ContainerProfileFooter, ContainerConnectHeader, ContainerProfileName, ProfileBio, ProfileImg, ProfileName, ProfileUser, ContainerAwesomeIcon, ConnectText, TextFooter, ContainerComment, ConnectImage, TextDate } from "./styles"
import { ButtonBack } from "../../components/ButtonBack"
import { faHeart } from '@fortawesome/free-regular-svg-icons/faHeart'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons/faHeart'
import { faComment } from '@fortawesome/free-regular-svg-icons/faComment'
import { RFValue } from "react-native-responsive-fontsize"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { useNavigation } from "@react-navigation/native"
import { CommentList } from "../../components/CommentList"
import { Connect as ConnectType } from "../../schemas/Models"
import { timestampToDate } from "../../utils/timestampToDate"
import ImageProfileNull from '../../../assets/imageProfileNull.png'
import { gql, useQuery } from "@apollo/client"

interface propsConnect {
    route?: {
        params: { connect: ConnectType }
    }
}

const ConnectPage: React.FC<propsConnect> = ({ route }) => {

    const navigation = useNavigation();

    useState(() => {
        console.log(route?.params)
    })

    const [hasLiked, setHasLiked] = useState<boolean>(false)

    const { data, error, loading } = useQuery(gql`
    query findPostComments($postId: String!) {
        findPostComments(postId: $postId) {
        text
        createdAt
        owner {
            name
            username
            picture
            }
        }
    }
    `, {
        variables: { postId: route?.params.connect.id },
        onCompleted(data) {
            console.log(data)
        },
    })

    return (
        <Container>
            <ContainerHeader>
                <ButtonBack />
                <ContainerConnectHeader onPress={() => navigation.navigate('Profile' as never, { username: route?.params.connect.owner.username! })}>
                    <ProfileImg source={route?.params.connect.owner.picture ? { uri: route?.params.connect.owner.picture } : ImageProfileNull} />
                    <ContainerProfileName>
                        <ProfileName>{route?.params.connect.owner.name}</ProfileName>
                        <ProfileUser>@{route?.params.connect.owner.username}</ProfileUser>
                    </ContainerProfileName>
                </ContainerConnectHeader>
                <ConnectText>{route?.params.connect.text}</ConnectText>
                {route?.params.connect.picture != "undefined" ? <ConnectImage source={{ uri: route?.params.connect.picture }} /> : <></>}
                <TextDate>{timestampToDate(route?.params.connect.createdAt!)}</TextDate>
                <ContainerProfileFooter>
                    <ContainerAwesomeIcon onPress={() => navigation.navigate('NewCommentPage' as never, { connect: route?.params })}>
                        <FontAwesomeIcon icon={faComment} size={RFValue(18)} />
                        <TextFooter>0 comentários</TextFooter>
                    </ContainerAwesomeIcon>
                    <ContainerAwesomeIcon onPress={() => setHasLiked(!hasLiked)}>
                        {hasLiked ? <FontAwesomeIcon icon={faHeartSolid} size={RFValue(18)} color="red" /> : <FontAwesomeIcon icon={faHeart} size={RFValue(18)} color="black" />}
                        <TextFooter>{route?.params.connect.likes} curtidas</TextFooter>
                    </ContainerAwesomeIcon>
                </ContainerProfileFooter>
            </ContainerHeader>
            <ContainerComment>
                <CommentList comments={data?.findPostComments} />
            </ContainerComment>
        </Container >
    )
}

export { ConnectPage }