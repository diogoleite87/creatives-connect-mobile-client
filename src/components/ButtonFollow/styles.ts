import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const ContainerFollow = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.ARCOIRISYELLOW};
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 15px;
    margin-right: 15px;
`

export const ContainerUnfollow = styled.TouchableHighlight`
    background-color: ${({ theme }) => theme.COLORS.ARCOIRISGREEN};
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 15px;
    margin-right: 15px;
`

export const ButtonText = styled.Text`
   font-size: ${RFValue(14)}px;
   font-weight: bold;
`