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

export const ButtonView = styled.TouchableOpacity`
`

export const Title = styled.Text`
  margin-top: ${RFValue(20)}px;
  font-size: ${RFValue(32)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.BLACK};
`

export const Subtitle = styled.Text`
  margin-top: ${RFValue(10)}px;
  font-size: ${RFValue(25)}px;
  font-weight: 200;
  color: ${({ theme }) => theme.COLORS.BLACK};
`

export const SubtitleLogin = styled.Text`
  margin-top: ${RFValue(15)}px;
  font-size: ${RFValue(25)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.BLACK};
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
  align-items: flex-start;
`

export const RegisterView = styled.View`
    width: 100%;
    flex-direction: row;
`

export const TextRegister = styled.Text`
    color: ${({ theme }) => theme.COLORS.BLACK};
`

export const TextRegisterButton = styled.Text`
    margin-left: ${RFValue(5)}px;
    color: ${({ theme }) => theme.COLORS.BLUE2};
`

export const ButtonSubmit = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(50)}px;
  margin-top: ${RFValue(20)}px;
  border-radius: ${RFValue(14)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BLACK};
`

export const TextButtonSubmit = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
`

export const TextError = styled.Text`
    color: ${({ theme }) => theme.COLORS.RED};
`