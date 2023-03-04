import React, { ReactElement } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen'
import { RFValue } from "react-native-responsive-fontsize";
import { ButtonText, Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

interface propsButtonEdit {
    onPress(): void
}

const ButtonEdit: React.FC<propsButtonEdit> = ({ onPress }) => {

    const navigation = useNavigation();

    return (
        <Container onPress={onPress}>
            <FontAwesomeIcon icon={faPen} size={RFValue(14)} />
            <ButtonText>Editar</ButtonText>
        </Container>
    )
}

export { ButtonEdit }