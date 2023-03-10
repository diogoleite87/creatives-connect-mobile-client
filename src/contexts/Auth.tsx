import React, { createContext, ReactElement, ReactNode, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginDTO } from "../schemas/DTO";
import { AuthData } from "../schemas/Models";
// import { AuthService } from "../services/AuthService";
import { useQuery, useMutation } from "@apollo/client";
import { LoginMutation, LoginMutationVariables } from "../generated/api-types";
import { LOGIN } from "../graphql/auth/mutations";

interface IProps {
    children: ReactNode
}

interface AuthContextData {

    authData?: AuthData
    signIn: (userData: AuthData) => Promise<void>,
    signOut: () => Promise<void>
    loading: boolean
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC<IProps> = ({ children }): ReactElement => {

    const [authData, setAuthData] = useState<AuthData>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        loadAuthDataStorage()
    }, [])

    const loadAuthDataStorage = async () => {
        const auth = await AsyncStorage.getItem('@AuthData')

        if (auth) {
            setAuthData(JSON.parse(auth))
        }

        setLoading(false)
    }

    const signIn = async (userData: AuthData) => {

        setAuthData(userData)
        AsyncStorage.setItem('@AuthData', JSON.stringify(userData))

    }

    const signOut = async (): Promise<void> => {

        setAuthData(undefined)
        AsyncStorage.removeItem('@AuthData')
    }

    return (
        <AuthContext.Provider value={{ authData, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}