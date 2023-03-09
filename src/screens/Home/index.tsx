import React, { useEffect, useState } from 'react'
import { Connect as ConnectType, Profile } from '../../schemas/Models'
import { Container, ContainerButtonConnect, ContainerButtonSearch, ContentBody, ContentFooter, ContentHeader, SubTitle, Title } from './styles';
import { ButtonProfile } from '../../components/ButtonProfile';
import { ButtonConnect } from '../../components/ButtonConnect';
import { ConnectList } from '../../components/ConnectList';
import { useNavigation } from '@react-navigation/native';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { RFValue } from 'react-native-responsive-fontsize';
import { FindUserByUsernameQuery, GetUserTimelineQueryVariables, QueryGetUserTimelineArgs } from '../../generated/api-types';
import { gql, useQuery } from '@apollo/client';
import { useAuth } from '../../hooks/useAuth';


const Home: React.FC = () => {

    const [user, setUser] = useState<FindUserByUsernameQuery>({} as FindUserByUsernameQuery)

    const { authData } = useAuth()

    const navigation = useNavigation()

    const { data, error, loading } = useQuery(gql`
    query getUserTimeline($username: String!) {
        getUserTimeline(username: $username) {
          id
          text
          picture
          createdAt
          likes
          timestamp
          owner {
            name
            username
            biography
            city
            }
        }
    }
    `, {
        variables: { username: authData?.userName! },
        onCompleted(data) {
            console.log(data.getUserTimeline)
        },
    })

    return (
        <Container>
            <ContentHeader>
                <ButtonConnect />
                <ButtonProfile />
            </ContentHeader>
            <ContentBody>
                <ConnectList connects={data?.getUserTimeline} />
            </ContentBody>
            <ContainerButtonSearch onPress={() => navigation.navigate('SearchPage' as never)}>
                <FontAwesomeIcon icon={faMagnifyingGlass} size={RFValue(25)} color='white' />
            </ContainerButtonSearch>
            <ContainerButtonConnect onPress={() => navigation.navigate('NewConnectPage' as never)}>
                <FontAwesomeIcon icon={faPen} size={RFValue(25)} color='white' />
            </ContainerButtonConnect>
        </Container >
    )

}

export { Home }