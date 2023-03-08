import React, { useEffect, useState } from "react"
import { ProfileCity, Container, ContainerHeader, ContainerProfile, ContainerProfileFooter, ContainerProfileHeader, ContainerProfileName, ProfileBio, ProfileImg, ProfileName, ProfileUser, ProfileBithday, ContainerAwesomeIcon, ContainerButtons, ContentProfileHeader } from "./styles"
import { ButtonBack } from "../../components/ButtonBack"
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import { faCakeCandles } from '@fortawesome/free-solid-svg-icons/faCakeCandles'

import { Profile as ProfileModel } from "../../schemas/Models"
import { RFValue } from "react-native-responsive-fontsize"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { CommentList } from "../../components/CommentList"
import { ButtonSettings } from "../../components/ButtonSettings"
import { ButtonFollow } from "../../components/ButtonFollow"
import { useQuery } from "@apollo/client"
import { FindUserByUsernameQuery, FindUserByUsernameQueryVariables } from "../../generated/api-types"
import { FIND_USER_BY_USERNAME } from "../../graphql/user/queries"
import ImagemProfileNull from '../../../assets/imageProfileNull.png'
import { useAuth } from "../../hooks/useAuth"
import { timestampToDate } from "../../utils/timestampToDate"

interface propsProfile {
    route?: {
        params: {
            userName: string
        }
    }
}

const Profile: React.FC<propsProfile> = ({ route }) => {

    const { authData } = useAuth()

    const { data, error, loading } = useQuery<
        FindUserByUsernameQuery,
        FindUserByUsernameQueryVariables
    >(FIND_USER_BY_USERNAME, {
        variables: { username: authData?.userName ? authData?.userName : '' }
    })

    return (
        <Container>
            <ContainerHeader>
                <ContainerButtons>
                    <ButtonBack />
                    {data?.findUserByUsername.username == route?.params.userName ? <ButtonSettings navigationScreen={"Settings"} /> : <></>}
                </ContainerButtons>
                <ContainerProfile>
                    <ContainerProfileHeader>
                        <ContentProfileHeader>
                            <ProfileImg source={data?.findUserByUsername.picture == undefined ? { uri: data?.findUserByUsername.picture } : ImagemProfileNull} />
                            <ContainerProfileName>
                                <ProfileName>{data?.findUserByUsername.name}</ProfileName>
                                <ProfileUser>@{data?.findUserByUsername.username}</ProfileUser>
                            </ContainerProfileName>
                        </ContentProfileHeader>
                        {route?.params.userName != authData?.userName ? <ButtonFollow userFollow="filipe2493" /> : <></>}

                    </ContainerProfileHeader>
                    <ProfileBio>{data?.findUserByUsername.biography}</ProfileBio>
                    <ContainerProfileFooter>
                        <ContainerAwesomeIcon>
                            <FontAwesomeIcon icon={faLocationDot} size={RFValue(12)} />
                            <ProfileCity>{data?.findUserByUsername.city}</ProfileCity>
                        </ContainerAwesomeIcon>
                        <ContainerAwesomeIcon>
                            <FontAwesomeIcon icon={faCakeCandles} size={RFValue(12)} />
                            <ProfileBithday>{timestampToDate(data?.findUserByUsername.birthday)}</ProfileBithday>
                        </ContainerAwesomeIcon>
                    </ContainerProfileFooter>
                </ContainerProfile>
            </ContainerHeader>
            <CommentList />
        </Container>
    )
}

export { Profile }