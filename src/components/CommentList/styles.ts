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