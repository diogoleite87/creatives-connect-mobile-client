import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear'
import { RFValue } from "react-native-responsive-fontsize";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

interface propsButtonSettings {
    navigationScreen: string
}

const ButtonSettings: React.FC<propsButtonSettings> = ({ navigationScreen }) => {

    const navigation = useNavigation();

    return (
        <Container onPress={() => navigation.navigate(navigationScreen as never)}>
            <FontAwesomeIcon icon={faGear} size={RFValue(20)} />
        </Container>
    )
}

export { ButtonSettings }