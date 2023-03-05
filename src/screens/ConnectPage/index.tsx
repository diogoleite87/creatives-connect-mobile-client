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

interface propsConnect {
    route?: {
        params: ConnectType
    }
}

const ConnectPage: React.FC<propsConnect> = ({ route }) => {

    const navigation = useNavigation();

    useState(() => {
        console.log(route?.params)
    })

    const [hasLiked, setHasLiked] = useState<boolean>(false)

    return (
        <Container>
            <ContainerHeader>
                <ButtonBack />
                <ContainerConnectHeader onPress={() => navigation.navigate('Profile' as never)}>
                    <ProfileImg source={{ uri: route?.params.profileImage }} />
                    <ContainerProfileName>
                        <ProfileName>{route?.params.name}</ProfileName>
                        <ProfileUser>@{route?.params.userName}</ProfileUser>
                    </ContainerProfileName>
                </ContainerConnectHeader>
                <ConnectText>{route?.params.connectText}</ConnectText>
                {route?.params.connectImage ? <ConnectImage source={{ uri: route?.params.connectImage }} /> : <></>}
                <TextDate>{route?.params.date}</TextDate>
                <ContainerProfileFooter>
                    <ContainerAwesomeIcon onPress={() => navigation.navigate('NewCommentPage' as never)}>
                        <FontAwesomeIcon icon={faComment} size={RFValue(18)} />
                        <TextFooter>0 comentários</TextFooter>
                    </ContainerAwesomeIcon>
                    <ContainerAwesomeIcon onPress={() => setHasLiked(!hasLiked)}>

                        {hasLiked ? <FontAwesomeIcon icon={faHeartSolid} size={RFValue(18)} color="red" /> : <FontAwesomeIcon icon={faHeart} size={RFValue(18)} color="black" />}
                        <TextFooter>{route?.params.liked} curtidas</TextFooter>
                    </ContainerAwesomeIcon>
                </ContainerProfileFooter>
            </ContainerHeader>
            <ContainerComment>
                <CommentList />
            </ContainerComment>
        </Container>
    )
}

export { ConnectPage }