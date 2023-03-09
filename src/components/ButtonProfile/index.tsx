import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { RFValue } from "react-native-responsive-fontsize";
import { Container, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/useAuth";

const ButtonProfile: React.FC = () => {

    const navigation = useNavigation();
    const { authData } = useAuth()

    return (
        <Container onPress={() => navigation.navigate('Profile', { username: authData?.userName! })}>
            <FontAwesomeIcon icon={faUser} size={RFValue(20)} />
            <Title>Perfil</Title>
        </Container>
    )
}

export { ButtonProfile }