import styled from 'styled-components/native';
import { Text, Button as ButtonPapper } from 'react-native-paper'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.SafeAreaView`
     flex: 1;
     background-color: ${(props: { theme: { background: any; }; }) => props.theme.background};
`;

export const ItemContainer = styled.View`
     flex: 1;
     width: 100%;
     flex-direction: row;
     justify-content: space-between;
     align-content: center;
     padding-vertical: 16px;
     padding-left: 10px;
  `;

export const ItemHourAndSpecialtyAndLocalization = styled(Text)`
     font-size: ${RFValue(14)}px;
     color: ${(props: { theme: { color: any; }; }) => props.theme.color};
`;

export const ItemDate = styled(Text)`
     font-size: ${RFValue(14)}px;
     color: ${(props: { theme: { color: any; }; }) => props.theme.color};
`

export const ContainerButton = styled.View`
     align-items: center;
     justify-content: center;
     padding-top: ${RFValue(15)}px;
     margin-horizontal: ${RFValue(20)}px;
     margin-bottom: ${RFValue(10)}px;
`

export const PressableButton = styled(ButtonPapper).attrs(props => ({     
     mode: "outlined"
}))``
