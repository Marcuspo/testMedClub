import React from 'react';
import { useColorScheme , View} from 'react-native'
import { ThemeProvider } from 'styled-components'
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

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
                         gestureEnabled: true,
                         gestureDirection: 'horizontal',
                         cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    }}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="AddNewRegistry" component={MedicalAppointment} />
               </Stack.Navigator>
          </ThemeProvider>
     </NavigationContainer>
  );
}

export default App;