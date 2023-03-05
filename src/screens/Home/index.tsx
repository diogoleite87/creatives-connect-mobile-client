import React, { useEffect, useState } from 'react'
import { UserService } from '../../services/UserService'
import { Connect as ConnectType, Profile } from '../../schemas/Models'
import { Container, ContainerButtonConnect, ContentBody, ContentFooter, ContentHeader, SubTitle, Title } from './styles';
import { ButtonProfile } from '../../components/ButtonProfile';
import { ButtonConnect } from '../../components/ButtonConnect';
import { ConnectList } from '../../components/ConnectList';
import { useNavigation } from '@react-navigation/native';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { RFValue } from 'react-native-responsive-fontsize';

const data = [{
    comment: 10,
    connectText: 'Felicidade é como uma borboleta: quanto mais você tenta apanhá-la, mais ela se afasta de você. Mas se você dirigir sua atenção para outras coisas, ela virá e pousará suavemente no seu ombro.',
    date: '01/03/2023',
    connectImage: null,
    id: 1,
    liked: 345,
    name: 'Filipe de Sá',
    userName: 'filipe2493',
    profileImage: 'https://avatars.githubusercontent.com/u/85424389?v=4'
},
{
    comment: 0,
    connectText: 'A filosofia que cultivo não é nem tão bárbara nem tão inacessível que rejeite as paixões; pelo contrário, é só nelas que reside a doçura e felicidade da vida.',
    date: '01/03/2023',
    connectImage: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTjsuTrH4Gw2vlrHN8rbrUVbPc9EKP9NHDgxmrLUWDa7MZxy3WFJ_g3QW3IP8ayCGlZ9qHGC_6ydbsMIBf7d2YsBa4GP1gWReKXyPevKJMd',
    id: 4,
    liked: 3,
    name: 'Vitor do P.A',
    userName: 'filipecurteverdin244',
    profileImage: 'https://avatars.githubusercontent.com/u/98324955?v=4'
},
{
    comment: 109,
    connectText: 'A vida só pode ser compreendida, olhando-se para trás; mas só pode ser vivida, olhando-se para frente.',
    connectImage: null,
    date: '01/03/2023',
    id: 2,
    liked: 3455,
    name: 'Diogo Leite',
    userName: 'diogoleite87',
    profileImage: 'https://avatars.githubusercontent.com/u/62341955?v=4'
},
{
    comment: 3,
    connectText: 'Vou-lhe dizer um grande segredo, meu caro. Não espere o juízo final. Ele realiza-se todos os dias.',
    date: '01/03/2023',
    connectImage: null,
    id: 3,
    liked: 33,
    name: 'Daniel Jogadas',
    userName: 'bola8',
    profileImage: 'https://pbs.twimg.com/profile_images/1606764972398321665/ZqWoLLKP_400x400.jpg'
}]


const Home: React.FC = () => {

    const [user, setUser] = useState<Profile | undefined>()
    const [connects, setConnects] = useState<ConnectType[]>(data)

    const navigation = useNavigation()

    useEffect(() => {
        UserService.getProfile().then(res => {
            setUser(res.data)
        }).catch(err => {
            console.log(err.response.data)
        })

    }, [])

    return (
        <Container>
            <ContentHeader>
                <ButtonConnect />
                <ButtonProfile />
            </ContentHeader>
            <ContentBody>
                <ConnectList connects={connects} />
            </ContentBody>
            <ContainerButtonConnect onPress={() => navigation.navigate('NewConnectPage' as never)}>
                <FontAwesomeIcon icon={faPen} size={RFValue(25)} color='white' />
            </ContainerButtonConnect>
        </Container >
    )

}

export { Home }