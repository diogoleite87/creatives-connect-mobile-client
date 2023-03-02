import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  margin: 2px;
    flex-direction: column;
    color: tomato;
`

export const ContainerProfileHeader = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const ProfileImg = styled.Image`
  margin: 10px;
  width: 45px;
  height: 45px;
  border-radius: 100px;
`

export const ProfileUser = styled.Text`
  font-size: ${RFValue(8)}px;
`

export const ContainerProfileName = styled.View` 
  margin: 5px;
  flex-direction: column;
`
export const ProfileName = styled.Text`
  font-size: ${RFValue(12)}px;
  color: black;
  font-weight: bold;
`

export const ConnectComment = styled.Text`
  margin: 5px;
  font-size: ${RFValue(12)}px;
  color: black;
`

export const ContainerProfileFooter = styled.View`
  margin: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
`

export const TextFooter = styled.Text`
  font-size: ${RFValue(12)}px;
  margin-left: 5px;
`

