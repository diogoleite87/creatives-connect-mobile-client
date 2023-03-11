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

export const ContentHeader = styled.View`
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

export const ButtonEditSubmit = styled.TouchableOpacity`
  width: 50%;
  height: ${RFValue(35)}px;
  margin-top: ${RFValue(20)}px;
  border-radius: ${RFValue(14)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BLUE1};
`

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE}
`