import React from "react";

import { ConnectComment, Container, ContainerProfileHeader, ContainerProfileName, ProfileImg, ProfileName, ProfileUser, TextDate, TextFooter } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ConnectComment as ConnectCommentType } from "../../schemas/Models";
import { timestampToDate } from "../../utils/timestampToDate";
import ImageProfileNull from '../../../assets/imageProfileNull.png'

interface propsComment {
    connectComment: ConnectCommentType
}

const Comment: React.FC<propsComment> = ({ connectComment }) => {

    const navigation = useNavigation();

    return (
        <Container>
            <ContainerProfileHeader onPress={() => navigation.navigate('Profile' as never, { username: connectComment.owner.username! })}>
                <ProfileImg source={connectComment.owner.picture != "undefined" ? { uri: connectComment.owner.picture } : ImageProfileNull} />
                <ContainerProfileName>
                    <ProfileName>{connectComment.owner.name}</ProfileName>
                    <ProfileUser>@{connectComment.owner.username}</ProfileUser>
                </ContainerProfileName>
            </ContainerProfileHeader>
            <ConnectComment>{connectComment.text}</ConnectComment>
            <TextDate>{timestampToDate(connectComment.createdAt)}</TextDate>
        </Container>
    )
}

export { Comment }