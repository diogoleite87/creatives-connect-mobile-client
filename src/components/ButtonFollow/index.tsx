import React, { useEffect, useState } from "react";

import { ButtonText, ContainerFollow, ContainerUnfollow } from "./styles";

interface propsButtonFollow {
    userFollow: string
}

const ButtonFollow: React.FC<propsButtonFollow> = ({ userFollow }) => {

    const [isFollowing, setIsFollowing] = useState<boolean>(false)

    useEffect(() => {

    }, [])

    const follow = async () => {
        setIsFollowing(!isFollowing)
    }

    const unFollow = async () => {
        setIsFollowing(!isFollowing)
    }

    return (
        isFollowing ? <ContainerUnfollow onPress={unFollow}>
            <ButtonText>Seguindo</ButtonText>
        </ContainerUnfollow> :
            <ContainerFollow onPress={follow}>
                <ButtonText>Seguir</ButtonText>
            </ContainerFollow>
    )
}

export { ButtonFollow }