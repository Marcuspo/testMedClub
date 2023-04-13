import React from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';

const MedicalAppointment = (props) => {
     console.log(JSON.stringify(props, null, 2))
     return(
          <SafeAreaView style={{flex: 1}}>
               <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Text style={{color: 'black'}}>Teste</Text>
               </TouchableOpacity>
          </SafeAreaView>
     )
}

export default MedicalAppointment