import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons/faHeart'
import { faComment } from '@fortawesome/free-regular-svg-icons/faComment'
import { RFValue } from "react-native-responsive-fontsize";
import { ConnectImage, ConnectText, Container, ContainerProfileFooter, ContainerProfileHeader, ContainerProfileName, ProfileImg, ProfileName, ProfileUser, TextDate, TextFooter } from "./styles";
import { ContainerAwesomeIcon } from "../../screens/Profile/styles";
import { useNavigation } from "@react-navigation/native";
import { Connect as ConnectType } from "../../schemas/Models";

interface connectProps {
    connectItem: ConnectType
}


const Connect: React.FC<connectProps> = ({ connectItem }) => {

    const navigation = useNavigation();

    const navigate = () => {
        console.log(connectItem)
        navigation.navigate('ConnectPage' as never, connectItem as never);
    }

    return (
        <Container onPress={navigate}>
            <ContainerProfileHeader>
                <ProfileImg source={{ uri: connectItem.profileImage }} />
                <ContainerProfileName>
                    <ProfileName>{connectItem.name}</ProfileName>
                    <ProfileUser>@{connectItem.userName}</ProfileUser>
                </ContainerProfileName>
            </ContainerProfileHeader>
            <ConnectText>{connectItem.connectText}</ConnectText>
            {connectItem.connectImage ? <ConnectImage source={{ uri: connectItem.connectImage }} /> : <></>}
            <TextDate>{connectItem.date}</TextDate>
            <ContainerProfileFooter>
                <ContainerAwesomeIcon>
                    <FontAwesomeIcon icon={faComment} size={RFValue(18)} />
                    <TextFooter>{connectItem.comment} comentários</TextFooter>
                </ContainerAwesomeIcon>
                <ContainerAwesomeIcon>
                    <FontAwesomeIcon icon={faHeart} size={RFValue(18)} color="black" />
                    <TextFooter>{connectItem.liked} curtidas</TextFooter>
                </ContainerAwesomeIcon>
            </ContainerProfileFooter>
        </Container>
    )
}

export { Connect }