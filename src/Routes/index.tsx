import React from 'react';
import { useColorScheme } from 'react-native'
import { ThemeProvider } from 'styled-components'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../Pages/Home/App'
import MedicalAppointment from '../Pages/MedicalAppointment/index'

const Stack = createStackNavigator();

import themes from '../theme/colors'

function App() {
     const colorDeviceTheme = useColorScheme();

     const theme = themes[colorDeviceTheme] || theme.dark
  return (
    <NavigationContainer>
     <ThemeProvider theme={theme}>
          <Stack.Navigator 
               initialRouteName='Home' 
               screenOptions={{ 
                    headerShown: false, 
               }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddNewRegistry" component={MedicalAppointment} />
          </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;