import React, { useEffect, useState } from "react"
import { ProfileCity, Container, ContainerHeader, ContainerProfile, ContainerProfileFooter, ContainerProfileHeader, ContainerProfileName, ProfileBio, ProfileImg, ProfileName, ProfileUser, ProfileBithday, ContainerAwesomeIcon, ContainerButtons } from "./styles"
import { ButtonBack } from "../../components/ButtonBack"
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import { faCakeCandles } from '@fortawesome/free-solid-svg-icons/faCakeCandles'

import { Profile as ProfileModel } from "../../schemas/Models"
import { RFValue } from "react-native-responsive-fontsize"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { CommentList } from "../../components/CommentList"
import { ButtonSettings } from "../../components/ButtonSettings"

interface propsProfile {
    route?: {
        params: {
            userName: string
        }
    }
}

const Profile: React.FC<propsProfile> = ({ route }) => {

    const [profileStatus, setProfileStatus] = useState<ProfileModel>({
        profileImage: 'https://avatars.githubusercontent.com/u/62341955?v=4',
        name: 'Diogo Leite',
        userName: 'diogoleite87',
        bio: 'O valor das coisas não está no tempo que elas duram, mas na intensidade com que acontecem. Por isso existem momentos inesquecíveis, coisas inexplicáveis e pessoas incomparáveis.',
        birthday: '19 de Abril',
        city: 'João Monlevade, Mg'
    } as ProfileModel);

    useEffect(() => {
        console.log(route?.params)
    })

    return (
        <Container>
            <ContainerHeader>
                <ContainerButtons>
                    <ButtonBack />
                    <ButtonSettings navigationScreen={"Settings"} />
                </ContainerButtons>
                <ContainerProfile>
                    <ContainerProfileHeader>
                        <ProfileImg source={{ uri: profileStatus?.profileImage }} />
                        <ContainerProfileName>
                            <ProfileName>{profileStatus?.name}</ProfileName>
                            <ProfileUser>@{profileStatus?.userName}</ProfileUser>
                        </ContainerProfileName>
                    </ContainerProfileHeader>
                    <ProfileBio>{profileStatus?.bio}</ProfileBio>
                    <ContainerProfileFooter>
                        <ContainerAwesomeIcon>
                            <FontAwesomeIcon icon={faLocationDot} size={RFValue(12)} />
                            <ProfileCity>{profileStatus?.city}</ProfileCity>
                        </ContainerAwesomeIcon>
                        <ContainerAwesomeIcon>
                            <FontAwesomeIcon icon={faCakeCandles} size={RFValue(12)} />
                            <ProfileBithday>{profileStatus?.birthday}</ProfileBithday>
                        </ContainerAwesomeIcon>
                    </ContainerProfileFooter>
                </ContainerProfile>
            </ContainerHeader>
            <CommentList />
        </Container>
    )
}

export { Profile }