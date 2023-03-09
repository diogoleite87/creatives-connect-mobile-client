import React, { useEffect, useState } from "react"
import { ProfileCity, Container, ContainerHeader, ContainerProfile, ContainerProfileFooter, ContainerProfileHeader, ContainerProfileName, ProfileBio, ProfileImg, ProfileName, ProfileUser, ProfileBithday, ContainerAwesomeIcon, ContainerButtons, ContentProfileHeader } from "./styles"
import { ButtonBack } from "../../components/ButtonBack"
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import { faCakeCandles } from '@fortawesome/free-solid-svg-icons/faCakeCandles'

import { RFValue } from "react-native-responsive-fontsize"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { ButtonSettings } from "../../components/ButtonSettings"
import { ButtonFollow } from "../../components/ButtonFollow"
import { gql, useLazyQuery, useQuery } from "@apollo/client"
import { FindUserByUsernameQuery, FindUserByUsernameQueryVariables } from "../../generated/api-types"
import { FIND_USER_BY_USERNAME } from "../../graphql/user/queries"
import ImagemProfileNull from '../../../assets/imageProfileNull.png'
import { useAuth } from "../../hooks/useAuth"
import { timestampToDate } from "../../utils/timestampToDate"
import { ConnectList } from "../../components/ConnectList"
import { Connect } from "../../schemas/Models"

interface propsProfile {
    route?: {
        params: {
            username: string
        }
    }
}

const Profile: React.FC<propsProfile> = ({ route }) => {

    const { authData } = useAuth()

    const { data: userData, error: userError, loading: userLoading } = useQuery<
        FindUserByUsernameQuery,
        FindUserByUsernameQueryVariables
    >(FIND_USER_BY_USERNAME, {
        variables: { username: route?.params.username! },
        onCompleted(data) {
            console.log(data)
        },
    })

    const { data: connectsData, error: connectsError, loading: connectsLoading } = useQuery(gql`
    query findUserPosts($username: String!) {
        findUserPosts(username: $username) {
          id
          text
          picture
          createdAt
          likes
          timestamp
          owner {
            name
            username
            biography
            city
            }
        }
    }
    `, {
        variables: {
            username: route?.params.username
        },

        onCompleted(data) {
            console.log(data)
        },
    })

    return (
        <Container>
            <ContainerHeader>
                <ContainerButtons>
                    <ButtonBack />
                    {authData?.userName == route?.params.username ? <ButtonSettings navigationScreen={"Settings"} /> : <></>}
                </ContainerButtons>
                <ContainerProfile>
                    <ContainerProfileHeader>
                        <ContentProfileHeader>
                            <ProfileImg source={userData?.findUserByUsername.picture != "undefined" ? { uri: userData?.findUserByUsername.picture } : ImagemProfileNull} />
                            <ContainerProfileName>
                                <ProfileName>{userData?.findUserByUsername.name}</ProfileName>
                                <ProfileUser>@{userData?.findUserByUsername.username}</ProfileUser>
                            </ContainerProfileName>
                        </ContentProfileHeader>
                        {route?.params.username != authData?.userName ? <ButtonFollow userFollow={userData?.findUserByUsername.username!} /> : <></>}
                    </ContainerProfileHeader>
                    <ProfileBio>{userData?.findUserByUsername.biography}</ProfileBio>
                    <ContainerProfileFooter>
                        <ContainerAwesomeIcon>
                            <FontAwesomeIcon icon={faLocationDot} size={RFValue(12)} />
                            <ProfileCity>{userData?.findUserByUsername.city}</ProfileCity>
                        </ContainerAwesomeIcon>
                        <ContainerAwesomeIcon>
                            <FontAwesomeIcon icon={faCakeCandles} size={RFValue(12)} />
                            <ProfileBithday>{timestampToDate(userData?.findUserByUsername.birthday)}</ProfileBithday>
                        </ContainerAwesomeIcon>
                    </ContainerProfileFooter>
                    <ConnectList connects={connectsData?.findUserPosts} />
                </ContainerProfile>
            </ContainerHeader>
        </Container>
    )
}

export { Profile }