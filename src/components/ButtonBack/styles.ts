import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
flex-direction: row;
`
export const Title = styled.Text`
margin-left: ${RFValue(1)}px;
font-size: ${RFValue(14)}px;
`