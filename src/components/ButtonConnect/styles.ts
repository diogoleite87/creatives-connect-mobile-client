import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.TouchableOpacity` 
      font-size: ${RFValue(32)}px;
      flex-direction: row;
      font-weight: bold;
      /* background: ${({ theme }) => theme.COLORS.ATTENTION}; */
      max-width: 50%;
`

export const Red = styled.Text` 
    color: ${({ theme }) => theme.COLORS.ARCOIRISRED};
    font-size: ${RFValue(32)}px;
    font-weight: bold;
`

export const Green = styled.Text` 
    color: ${({ theme }) => theme.COLORS.ARCOIRISGREEN};
    font-size: ${RFValue(32)}px; 
    font-weight: bold;
`

export const Yellow = styled.Text` 
    color: ${({ theme }) => theme.COLORS.ARCOIRISYELLOW};
    font-size: ${RFValue(32)}px;
    font-weight: bold;
`

export const Blue = styled.Text` 
    color: ${({ theme }) => theme.COLORS.ARCOIRISBLUE};
    font-size: ${RFValue(32)}px;
    font-weight: bold;
`

export const Indigo = styled.Text` 
    color: ${({ theme }) => theme.COLORS.ARCOIRISINDIGO};
    font-size: ${RFValue(32)}px;
    font-weight: bold;
`

export const Violet = styled.Text` 
    color: ${({ theme }) => theme.COLORS.ARCOIRISVIOLET};
    font-size: ${RFValue(32)}px;
    font-weight: bold;
`

export const Orange = styled.Text` 
    color: ${({ theme }) => theme.COLORS.ARCOIRISORANGE};
    font-size: ${RFValue(32)}px;
    font-weight: bold;
`