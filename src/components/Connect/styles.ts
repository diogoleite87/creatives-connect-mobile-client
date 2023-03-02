import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
  margin: 2px;
  flex-direction: column;
  color: tomato;
`

export const ContainerProfileHeader = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ProfileImg = styled.Image`
  margin: 10px;
  width: 50px;
  height: 50px;
  border-radius: 100px;
`

export const ProfileUser = styled.Text`
  font-size: ${RFValue(10)}px;
`

export const ContainerProfileName = styled.View` 
  margin: 5px;
  flex-direction: column;
`
export const ProfileName = styled.Text`
  font-size: ${RFValue(14)}px;
  color: black;
  font-weight: bold;
`

export const ConnectText = styled.Text`
  margin: 5px;
  font-size: ${RFValue(14)}px;
  color: black;
`

export const ContainerProfileFooter = styled.View`
  margin: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
`

export const ConnectImage = styled.Image`
  margin: 5px;
  width: 100%;
  height: 350px;
  border-radius: 10px;
`

export const TextFooter = styled.Text`
  font-size: ${RFValue(12)}px;
  margin-left: 5px;
`

export const TextDate = styled.Text`
  margin: 5px;
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.BLUE1};
`
