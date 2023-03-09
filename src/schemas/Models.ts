import { FindUserByUsernameQuery } from "../generated/api-types"

export type AuthData = {
    userName: string
    token: string | null | undefined
}

export type Profile = {
    id: number
    userName: string
    name: string
    email: string
    profileImage: string
    bio: string
    city: string
    birthday: string
}

export type Connect = {
    __typename: string,
    id: string,
    text: string,
    picture: string | undefined,
    createdAt: number,
    likes: number,

    owner: {
        __typename: string,
        biography: string,
        city: string,
        name: string,
        username: string,
        picture: string | undefined
    },
}

export type ConnectComment = {
    text: string,
    createdAt: number,
    owner: {
        __typename: string,
        biography: string,
        city: string,
        name: string,
        username: string,
        picture: string | undefined
    },
}