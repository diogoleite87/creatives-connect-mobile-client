import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ButtonBack } from '../../components/ButtonBack';
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/useAuth';
import { Profile } from '../../schemas/Models';
import { ButtonEdit } from '../../components/ButtonEdit';
import { ButtonEditSubmit, ButtonSignOut, Container, ContainerImg, ContentBody, ContentFooter, ContentHeader, ProfileImg, ProfileUser, TextButton } from './styles';

const Settings: React.FC = () => {

    const [userProfile, setUserProfile] = useState<Profile>({
        name: 'Diogo Leite',
        bio: 'O valor das coisas não está no tempo que elas duram, mas na intensidade com que acontecem. Por isso existem momentos inesquecíveis, coisas inexplicáveis e pessoas incomparáveis.',
        profileImage: 'https://avatars.githubusercontent.com/u/62341955?v=4',
        userName: 'diogoleite87'
    } as Profile)


    const navigation = useNavigation();

    const { signOut } = useAuth();

    const editProfile = async () => {


    }

    return (
        <Container>
            <ContentHeader>
                <ButtonBack />
            </ContentHeader>
            <ContentBody>
                <ContainerImg>
                    <ProfileImg source={{ uri: userProfile.profileImage }} />
                    <ButtonEdit></ButtonEdit>
                    <ProfileUser>@{userProfile.userName}</ProfileUser>
                </ContainerImg>

                <Input
                    placeholder='Nome'
                    keyboardType='default'
                    value={userProfile.name}
                />
                <Input
                    placeholder='Biografia'
                    keyboardType='default'
                    value={userProfile.bio}
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