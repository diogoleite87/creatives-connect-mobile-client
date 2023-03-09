import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ButtonBack } from '../../components/ButtonBack';
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/useAuth';
import { gql, useMutation, useQuery } from "@apollo/client"
import { ButtonEditSubmit, ButtonSignOut, Container, ContainerImg, ContentBody, ContentFooter, ContentHeader, ProfileImg, ProfileUser, TextButton } from './styles';
import { InputImage } from '../../components/InputImage';
import { FindUserByUsernameQuery, FindUserByUsernameQueryVariables } from '../../generated/api-types';
import { FIND_USER_BY_USERNAME } from '../../graphql/user/queries';
import ImagemProfileNull from '../../../assets/imageProfileNull.png'
import { UPDATE_USER } from '../../graphql/user/mutations';

const Settings: React.FC = () => {

    const [profileImage, setProfileImage] = useState<string | null | undefined>()
    const [nameUpdate, setNameUpdate] = useState<string>('')
    const [cityUpdate, setCityUpdate] = useState<string>('')
    const [biographyUpdate, setbiographyUpdate] = useState<string | undefined | null>('')
    const [password, setPassword] = useState<string>('')

    const navigation = useNavigation();

    const { signOut, authData } = useAuth();

    const editProfile = async () => {

        console.log({ username: authData?.userName!, updatedUser: { name: nameUpdate, city: cityUpdate, biography: biographyUpdate, birthday: data?.findUserByUsername.birthday, password: password } })

        await updateUser({
            variables: { username: authData?.userName!, updatedUser: { name: nameUpdate, city: cityUpdate, biography: biographyUpdate, birthday: data?.findUserByUsername.birthday, password: password } }
        })
    }

    const { data, error, loading } = useQuery<
        FindUserByUsernameQuery,
        FindUserByUsernameQueryVariables
    >(FIND_USER_BY_USERNAME, {
        variables: { username: authData?.userName ? authData?.userName : '' },
        onCompleted(data) {
            setNameUpdate(data.findUserByUsername.name)
            setCityUpdate(data.findUserByUsername.city)
            setbiographyUpdate(data.findUserByUsername.biography)
        },
    })

    const [updateUser, { data: updatedUserData, error: updatedUserError }] = useMutation(gql`
    mutation updateUser($username: String!, $updatedUser: CreateUserInput!) {
        updateUser(username: $username, updatedUser: $updatedUser) {
          username
          name
        }
      }`, {
        onCompleted(data, clientOptions) {
            signOut()
        },
    }
    );

    return (
        <Container>
            <ContentHeader>
                <ButtonBack />
            </ContentHeader>
            <ContentBody>
                <ContainerImg>
                    <ProfileImg source={data?.findUserByUsername.picture == undefined ? { uri: data?.findUserByUsername.picture } : ImagemProfileNull} />
                    <InputImage setImage={setProfileImage} />
                    <ProfileUser>@{data?.findUserByUsername.username}</ProfileUser>
                </ContainerImg>

                <Input
                    placeholder='Nome'
                    keyboardType='default'
                    value={nameUpdate}
                    onChangeText={(text: string) => setNameUpdate(text)}
                />
                <Input
                    placeholder='Biografia'
                    keyboardType='default'
                    value={biographyUpdate ? biographyUpdate : ''}
                    onChangeText={(text: string) => setbiographyUpdate(text)}
                />
                <Input
                    placeholder='Cidade'
                    keyboardType='default'
                    value={cityUpdate}
                    onChangeText={(text: string) => setCityUpdate(text)}
                />
                <Input
                    placeholder="Senha"
                    secureTextEntry
                    value={password}
                    onChangeText={(text: string) => setPassword(text)}
                />

            </ContentBody>
            <ContentFooter>
                <ButtonEditSubmit onPress={editProfile}>
                    <TextButton>
                        Salvar Alterações
                    </TextButton>
                </ButtonEditSubmit>
                <ButtonSignOut onPress={signOut}>
                    <TextButton>
                        Sair do App
                    </TextButton>
                </ButtonSignOut>

            </ContentFooter>
        </Container>
    );
}

export { Settings }