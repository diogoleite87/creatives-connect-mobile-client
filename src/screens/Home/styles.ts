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
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`
export const ContentBody = styled.View`
  flex: 1;
  width: 100%;
  margin-bottom: ${RFValue(20)}px;
  margin-top: ${RFValue(20)}px;
`
export const ContentFooter = styled.View`
  width: 100%;
  margin-bottom: ${RFValue(20)}px;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
`

export const SubTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: bold;
`