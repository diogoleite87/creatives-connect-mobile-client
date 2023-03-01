import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
flex-direction: column;
align-items: center;
color: ${({ theme }) => theme.COLORS.WHITE};
`
export const Title = styled.Text`
margin-top: ${RFValue(1)}px;
font-size: ${RFValue(8)}px;
`