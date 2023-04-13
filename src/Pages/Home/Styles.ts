import styled from 'styled-components/native';
import { Text } from 'react-native-paper'
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
     flex: 1;
     background-color: ${(props: { theme: { background: any; }; }) => props.theme.background};
`;

export const ItemContainer = styled.View`
     flex-direction: row;
     justify-content: space-between;
     align-content: center;
     padding-vertical: 16px;
     padding-horizontal: 20px;
     border-bottom-width: 1px;
     border-bottom-color: #ccc;
  `;

export const ItemHourAndSpecialtyAndLocalization = styled.Text`
     font-size: ${RFValue(14)}px;
     color: ${(props: { theme: { color: any; }; }) => props.theme.color};
`;

export const ItemDate = styled.Text`
     font-size: ${RFValue(16)}px;
     font-weight: bold;
     color: ${(props: { theme: { color: any; }; }) => props.theme.color}

`
