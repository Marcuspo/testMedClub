import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
     flex: 1;
     background-color: ${(props: { theme: { background: any; }; }) => props.theme.background};

     justify-content: center;
`

export const ButtonGoBack = styled.View`
     position: absolute;
     z-index: 1;
     top: 30px;
     left: 40px;
`

export const ContainerInside = styled.View`
    flex: 1;
    
    justify-content: center;
    align-items: center;
`

export const TextDateAndHour = styled.Text`
     font-size: ${RFValue(18)}px;
     margin-right: 10px;
`

export const ContainerDateAndTimer = styled.View`
     flex-direction: row;
     align-items: center;
     margin-bottom: 20px;
`

export const Input = styled.TextInput.attrs((props: { theme: { color: any; }; }) => ({   
     placeholderTextColor: props.theme.color,
     
}))`
     width: 80%;
     height: 50px;
     padding: 10px;
     border: 1px solid #ccc;
     border-radius: 10px;
     margin-bottom: 10px;
`
