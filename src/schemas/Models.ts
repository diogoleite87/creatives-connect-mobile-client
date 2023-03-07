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
    id: number
    name: string
    userName: string
    connectText: string
    date: string
    connectImage: string | null
    liked: number
    profileImage: string
    comment: number
}

export type ConnectComment = {
    id: number
    name: string
    userName: string
    connectText: string
    date: string
    profileImage: string
}