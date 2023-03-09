import React, { useEffect, useState } from "react";

import { ButtonText, ContainerFollow, ContainerUnfollow } from "./styles";
import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { FOLLOW_USER } from "../../graphql/user/mutations";
import { MutationFollowUserVariables, MutationFollowUser } from "../../generated/api-types";
import { useAuth } from "../../hooks/useAuth";

interface propsButtonFollow {
    userFollow: string
}

const ButtonFollow: React.FC<propsButtonFollow> = ({ userFollow }) => {

    const [isFollowing, setIsFollowing] = useState<boolean>(false)
    const { authData } = useAuth()

    const submit = () => {
        isFollowing ? unFollow() : follow()
    }

    const follow = async () => {
        console.log('seguindo')
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
        console.log('deixando de seguir')
        await unfollowUser({
            variables: {
                sourceUsername: authData?.userName!,
                sinkUsername: userFollow
            }, onCompleted(data, clientOptions) {
                setIsFollowing(!isFollowing)
            },
        })
    }

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
        isFollowing ? <ContainerUnfollow onPress={unFollow}>
            <ButtonText>Seguindo</ButtonText>
        </ContainerUnfollow> :
            <ContainerFollow onPress={submit}>
                <ButtonText>Seguir</ButtonText>
            </ContainerFollow>
    )
}

export { ButtonFollow }