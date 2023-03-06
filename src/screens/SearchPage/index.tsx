import { useEffect, useState } from "react"
import { ButtonBack } from "../../components/ButtonBack"
import { Container, ContainerProfile, ContainerProfileName, ContentBody, ContentFooter, ContentHeader, Name, Profile, ProfileImage, UserName } from "./styles"
import { Input } from "../../components/Input"
import { ButtonConnect } from "../../components/ButtonConnect"
import { Profile as ProfileModel } from "../../schemas/Models"
import { useNavigation } from "@react-navigation/native"
import { ButtonFollow } from "../../components/ButtonFollow"

const SearchPage: React.FC = () => {

    const navigation = useNavigation()

    const [userSearch, setUserSearch] = useState<string>('')
    const [profileSearch, setProfileSearch] = useState<ProfileModel>({
        profileImage: 'https://avatars.githubusercontent.com/u/62341955?v=4',
        name: 'Diogo Leite',
        userName: 'diogoleite87',
        bio: 'O valor das coisas não está no tempo que elas duram, mas na intensidade com que acontecem. Por isso existem momentos inesquecíveis, coisas inexplicáveis e pessoas incomparáveis.',
        birthday: '19 de Abril',
        city: 'João Monlevade, Mg'
    } as ProfileModel)
    const [isFound, setIsFound] = useState<boolean>(true)

    useEffect(() => {
        console.log(userSearch)
    }, [userSearch])

    return (
        <Container>
            <ContentHeader>
                <ButtonBack />
                <Input
                    placeholder='Nome de Usuário'
                    onChangeText={(text: string) => setUserSearch(text)}
                />

                {isFound ?
                    <ContainerProfile>
                        <Profile onPress={() => navigation.navigate('Profile' as never)}>
                            <ProfileImage source={{ uri: profileSearch.profileImage }} />
                            <ContainerProfileName>
                                <Name>
                                    {profileSearch.name}
                                </Name>
                                <UserName>
                                    @{profileSearch.userName}
                                </UserName>
                            </ContainerProfileName>
                        </Profile>
                        <ButtonFollow userFollow="filipe2493" />
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