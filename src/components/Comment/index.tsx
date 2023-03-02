import React from "react";

import { ConnectComment, Container, ContainerProfileHeader, ContainerProfileName, ProfileImg, ProfileName, ProfileUser, TextFooter } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ConnectComment as ConnectCommentType } from "../../schemas/Models";

interface propsComment {
    connectComment: ConnectCommentType
}

const Comment: React.FC<propsComment> = ({ connectComment }) => {

    const navigation = useNavigation();

    return (
        <Container>
            <ContainerProfileHeader onPress={() => navigation.navigate('Profile' as never)}>
                <ProfileImg source={{ uri: connectComment.profileImage }} />
                <ContainerProfileName>
                    <ProfileName>{connectComment.name}</ProfileName>
                    <ProfileUser>@{connectComment.userName}</ProfileUser>
                </ContainerProfileName>
            </ContainerProfileHeader>
            <ConnectComment>{connectComment.connectText}</ConnectComment>
        </Container>
    )
}

export { Comment }