import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft'
import { RFValue } from "react-native-responsive-fontsize";
import { Container, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

const ButtonBack: React.FC = () => {

    const navigation = useNavigation();

    return (
        <Container onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faAngleLeft} size={RFValue(20)} />
            <Title>Voltar</Title>
        </Container>
    )
}

export { ButtonBack }