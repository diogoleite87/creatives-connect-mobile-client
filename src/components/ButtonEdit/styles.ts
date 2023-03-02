import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
    margin-top: -30px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    flex-direction: row;
    gap: 5px;
    padding: 5px;
    border-radius: 10px;
`

export const ButtonText = styled.Text`
   font-size: ${RFValue(14)}px;
`