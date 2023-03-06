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