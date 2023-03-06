import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-status-bar-height";

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

export const ContentHeader = styled.View`
  margin-top: ${RFValue(getStatusBarHeight(true))}px;
  width: 100%;
`

export const ContentBody = styled.View`
  width: 100%;
  margin-bottom: ${RFValue(20)}px;
  align-items: center;
`

export const ContentFooter = styled.View`
  width: 100%;
  margin-bottom: ${RFValue(20)}px;
  flex-direction: column;
  align-items: center;
`

export const ContainerProfile = styled.View`
 width: 100%;
 margin: 10px;
 margin-top: ${RFValue(20)}px;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
`

export const Profile = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const ContainerProfileName = styled.View`
  flex-direction: column;
  margin-left: ${RFValue(10)}px;
`
export const Name = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: bold;
`
export const UserName = styled.Text`
  font-size: ${RFValue(12)}px;
`
export const ProfileImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 100px;
`