import React, { useState } from "react";

import { ButtonText, ContainerFollow, ContainerUnfollow } from "./styles";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useAuth } from "../../hooks/useAuth";

interface propsButtonFollow {
    userFollow: string
}

const IS_USER_FOLLOWING = gql`
query isUserFollowing($sourceUsername: String!, $sinkUsername: String!) {
    isUserFollowing(sourceUsername: $sourceUsername, sinkUsername: $sinkUsername)
  } 
`

const ButtonFollow: React.FC<propsButtonFollow> = ({ userFollow }) => {

    const [isFollowing, setIsFollowing] = useState<boolean>(false)
    const { authData } = useAuth()

    const sourceUsername = authData?.userName
    const sinkUsername = userFollow

    const submit = () => {
        isFollowing ? unFollow() : follow()
    }

    const follow = async () => {
        await followUser({
            variables: {
                sourceUsername: authData?.userName!,
                sinkUsername: userFollow
            }, onCompleted(data, clientOptions) {
                setIsFollowing(!isFollowing)
            },
        })
    }

    const unFollow = async () => {
        await unfollowUser({
            variables: {
                sourceUsername: authData?.userName!,
                sinkUsername: userFollow
            }, onCompleted(data, clientOptions) {
                setIsFollowing(!isFollowing)
            },
        })
    }

    const { data, loading } = useQuery(IS_USER_FOLLOWING,
        {
            variables: { sourceUsername: sourceUsername, sinkUsername: sinkUsername },
            onCompleted(data) {
                setIsFollowing(data.isUserFollowing)
            },
        })

    const [followUser, { loading: followUserLoading, error: followUserError }] = useMutation(gql`
    mutation followUser($sourceUsername: String!, $sinkUsername: String!) {
        followUser(sourceUsername: $sourceUsername, sinkUsername: $sinkUsername)
      }
    `);

    const [unfollowUser, { loading: unFollowUserLoading, error: unFollowUserError }] = useMutation(gql`
    mutation followUser($sourceUsername: String!, $sinkUsername: String!) {
        unfollowUser(sourceUsername: $sourceUsername, sinkUsername: $sinkUsername)
      }
    `);

    return (
        !loading ?
            isFollowing ? <ContainerUnfollow onPress={unFollow}>
                <ButtonText>Seguindo</ButtonText>
            </ContainerUnfollow> :
                <ContainerFollow onPress={submit}>
                    <ButtonText>Seguir</ButtonText>
                </ContainerFollow> : <></>
    )
}

export { ButtonFollow }