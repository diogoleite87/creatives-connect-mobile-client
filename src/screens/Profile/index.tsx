import { faCakeCandles } from "@fortawesome/free-solid-svg-icons/faCakeCandles"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot"
import React from "react"
import { ButtonBack } from "../../components/ButtonBack"
import {
    Container,
    ContainerAwesomeIcon,
    ContainerButtons,
    ContainerHeader,
    ContainerProfile,
    ContainerProfileFooter,
    ContainerProfileHeader,
    ContainerProfileName,
    ContentProfileHeader,
    ProfileBio,
    ProfileBithday,
    ProfileCity,
    ProfileImg,
    ProfileName,
    ProfileUser
} from "./styles"

import { gql, useQuery } from "@apollo/client"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { RFValue } from "react-native-responsive-fontsize"
import ImageProfileNull from "../../../assets/imageProfileNull.png"
import { ButtonFollow } from "../../components/ButtonFollow"
import { ButtonSettings } from "../../components/ButtonSettings"
import { ConnectList } from "../../components/ConnectList"
import {
    FindUserByUsernameQuery,
    FindUserByUsernameQueryVariables
} from "../../generated/api-types"
import { FIND_USER_BY_USERNAME } from "../../graphql/user/queries"
import { useAuth } from "../../hooks/useAuth"
import { timestampToDate } from "../../utils/timestampToDate"
import { Loading } from "../../components/Loading"

interface propsProfile {
    route?: {
        params: {
            username: string
        }
    }
}

const FIND_USER_POSTS = gql`
  query findUserPosts($username: String!) {
    findUserPosts(username: $username) {
      id
      text
      picture
      createdAt
      likes
      owner {
        name
        username
        biography
        city
        picture
      }
    }
  }
`

const Profile: React.FC<propsProfile> = ({ route }) => {
    const { authData } = useAuth()

    const profileUser = route?.params.username!

    const { data: userData, loading: profileLoading } = useQuery<
        FindUserByUsernameQuery,
        FindUserByUsernameQueryVariables
    >(FIND_USER_BY_USERNAME, {
        variables: { username: profileUser }
    })

    const { data: connectsData, refetch: connectsRefetch, loading: postsLoading } = useQuery(FIND_USER_POSTS, {
        variables: {
            username: profileUser
        }
    })

    return (
        postsLoading || profileLoading ? <Loading /> :
            <Container>
                <ContainerHeader>
                    <ContainerButtons>
                        <ButtonBack />
                        {authData?.userName == route?.params.username ? (
                            <ButtonSettings navigationScreen={"Settings"} />
                        ) : (
                            <></>
                        )}
                    </ContainerButtons>
                    <ContainerProfile>
                        <ContainerProfileHeader>
                            <ContentProfileHeader>
                                <ProfileImg
                                    source={
                                        userData?.findUserByUsername.picture != "undefined"
                                            ? {
                                                uri: userData?.findUserByUsername.picture!
                                            }
                                            : ImageProfileNull
                                    }
                                />
                                <ContainerProfileName>
                                    <ProfileName>{userData?.findUserByUsername.name}</ProfileName>
                                    <ProfileUser>
                                        @{userData?.findUserByUsername.username}
                                    </ProfileUser>
                                </ContainerProfileName>
                            </ContentProfileHeader>
                            {route?.params.username != authData?.userName ? (
                                <ButtonFollow
                                    userFollow={userData?.findUserByUsername.username!}
                                />
                            ) : (
                                <></>
                            )}
                        </ContainerProfileHeader>
                        <ProfileBio>{userData?.findUserByUsername.biography}</ProfileBio>
                        <ContainerProfileFooter>
                            <ContainerAwesomeIcon>
                                <FontAwesomeIcon icon={faLocationDot} size={RFValue(12)} />
                                <ProfileCity>{userData?.findUserByUsername.city}</ProfileCity>
                            </ContainerAwesomeIcon>
                            <ContainerAwesomeIcon>
                                <FontAwesomeIcon icon={faCakeCandles} size={RFValue(12)} />
                                <ProfileBithday>
                                    {timestampToDate(userData?.findUserByUsername.birthday)}
                                </ProfileBithday>
                            </ContainerAwesomeIcon>
                        </ContainerProfileFooter>
                        <ConnectList connects={connectsData?.findUserPosts} refresh={() => connectsRefetch()} />
                    </ContainerProfile>
                </ContainerHeader>
            </Container>
    )
}

export { Profile }
