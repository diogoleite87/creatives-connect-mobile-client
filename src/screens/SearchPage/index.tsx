import { useEffect, useState } from "react"
import { ButtonBack } from "../../components/ButtonBack"
import { Container, ContainerProfile, ContainerProfileName, ContentBody, ContentFooter, ContentHeader, Name, Profile, ProfileImage, UserName } from "./styles"
import { Input } from "../../components/Input"
import { ButtonConnect } from "../../components/ButtonConnect"
import { useNavigation } from "@react-navigation/native"
import { ButtonFollow } from "../../components/ButtonFollow"
import { useLazyQuery, useQuery } from "@apollo/client"
import { FindUserByUsernameQuery, FindUserByUsernameQueryVariables } from "../../generated/api-types"
import { FIND_USER_BY_USERNAME } from "../../graphql/user/queries"
import ImagemProfileNull from '../../../assets/imageProfileNull.png'
import { useAuth } from "../../hooks/useAuth"

const SearchPage: React.FC = () => {

    const navigation = useNavigation()

    const [userSearch, setUserSearch] = useState<string>('')
    const [isFound, setIsFound] = useState<boolean>(false)

    const { authData } = useAuth()

    const [searchUser, { data, error, loading }] = useLazyQuery<
        FindUserByUsernameQuery,
        FindUserByUsernameQueryVariables
    >(FIND_USER_BY_USERNAME, {
        variables: { username: userSearch },
        onCompleted(data) {
            setIsFound(true)
        }, onError(error) {
            setIsFound(false)
        },
    })

    return (
        <Container>
            <ContentHeader>
                <ButtonBack />
                <Input
                    placeholder='Nome de Usuário'
                    onChangeText={(text: string) => setUserSearch(text)}
                    returnKeyType="done"
                    onSubmitEditing={async () => await searchUser()}
                />

                {isFound ?
                    <ContainerProfile>
                        <Profile onPress={() => navigation.navigate('Profile', { username: userSearch })}>
                            <ProfileImage source={data?.findUserByUsername.picture == undefined ? { uri: data?.findUserByUsername.picture } : ImagemProfileNull} />
                            <ContainerProfileName>
                                <Name>
                                    {data?.findUserByUsername.name}
                                </Name>
                                <UserName>
                                    @{data?.findUserByUsername.username}
                                </UserName>
                            </ContainerProfileName>
                        </Profile>
                        {data?.findUserByUsername.username != authData?.userName ? <ButtonFollow userFollow={data?.findUserByUsername.username!} /> : <></>}
                    </ContainerProfile>
                    : <></>}

            </ContentHeader>
            <ContentBody>
            </ContentBody>
            <ContentFooter>
                <ButtonConnect />
            </ContentFooter>
        </Container>
    )
}

export { SearchPage }