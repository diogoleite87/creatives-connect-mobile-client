import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  padding: ${RFValue(16)}px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUNDLIGHT};
`

export const ContainerComment = styled.View`
  margin-top: ${RFValue(16)}px;
  width: 100%;
`

export const ContainerHeader = styled.View`
  width: 100%;
`

export const ContainerProfile = styled.View`
  margin-top: ${RFValue(16)}px;
  width: 100%;
  height: 100%;
  flex-direction: column;
`

export const ContainerConnectHeader = styled.TouchableOpacity`
  margin-top: ${RFValue(16)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

`

export const ProfileImg = styled.Image`
  margin: 10px;
  width: 70px;
  height: 70px;
  border-radius: 100px;
`

export const ProfileUser = styled.Text`
  font-size: ${RFValue(14)}px;
`

export const ContainerProfileName = styled.View` 
  margin: 5px;
  flex-direction: column;
`
export const ProfileName = styled.Text`
  font-size: ${RFValue(18)}px;
  color: black;
  font-weight: bold;
`

export const ProfileBio = styled.Text`
  margin: 5px;
  font-size: ${RFValue(12)}px;
  color: black;
`

export const ContainerProfileFooter = styled.View`
  margin: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ContainerAwesomeIcon = styled.TouchableOpacity`
   align-items: center;
   flex-direction: row;
`

export const ContainerButtonDelete = styled.TouchableOpacity`
   align-items: center;
`

export const ContainerProfileDirection = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ConnectText = styled.Text`
  margin: 5px;
  font-size: ${RFValue(14)}px;
  color: black;
`

export const TextFooter = styled.Text`
  font-size: ${RFValue(12)}px;
  margin-left: 5px;
`

export const ConnectImage = styled.Image`
  margin: 5px;
  width: 100%;
  height: 350px;
  border-radius: 10px;
`

export const TextDate = styled.Text`
  margin: 5px;
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.BLUE1};
`