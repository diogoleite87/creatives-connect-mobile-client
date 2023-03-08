import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ButtonBack } from '../../components/ButtonBack';
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/useAuth';
import { useQuery } from "@apollo/client"
import { ButtonEditSubmit, ButtonSignOut, Container, ContainerImg, ContentBody, ContentFooter, ContentHeader, ProfileImg, ProfileUser, TextButton } from './styles';
import { InputImage } from '../../components/InputImage';
import { FindUserByUsernameQuery, FindUserByUsernameQueryVariables } from '../../generated/api-types';
import { FIND_USER_BY_USERNAME } from '../../graphql/user/queries';
import ImagemProfileNull from '../../../assets/imageProfileNull.png'

const Settings: React.FC = () => {

    const [profileImage, setProfileImage] = useState<string | null | undefined>()

    const navigation = useNavigation();

    const { signOut, authData } = useAuth();

    const editProfile = async () => {


    }

    const { data, error, loading } = useQuery<
        FindUserByUsernameQuery,
        FindUserByUsernameQueryVariables
    >(FIND_USER_BY_USERNAME, {
        variables: { username: authData?.userName ? authData?.userName : '' }
    })

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
                    value={data?.findUserByUsername.name}
                />
                <Input
                    placeholder='Biografia'
                    keyboardType='default'
                    value={data?.findUserByUsername.biography ? data?.findUserByUsername.biography : ''}
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