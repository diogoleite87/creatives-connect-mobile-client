import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ContainerList = styled.FlatList`
  width: 100%;
  height: 100%;
`

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  color: black;
  font-weight: bold;
`

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE}
`
export const ButtonRefresh = styled.TouchableOpacity`
  width: 30%;
  height: ${RFValue(25)}px;
  margin-top: ${RFValue(10)}px;
  border-radius: ${RFValue(14)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.ARCOIRISINDIGO};
`
