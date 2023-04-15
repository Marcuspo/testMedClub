import React, { useState, useContext, useEffect } from 'react';
import { FlatList, View, Pressable, TouchableOpacity } from 'react-native';
import { Card, Divider, Text } from 'react-native-paper';
import moment from 'moment';
import { ThemeContext } from 'styled-components'
import { useNavigation } from '@react-navigation/native';

import * as Styled from './Styles'
import EmptyComponent  from './components/EmptyComponent/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const [appointments, setAppointments] = useState(undefined);
  const [refreshing, setRefresing] = useState(false)

  const themeContext = useContext(ThemeContext)
  const navigation = useNavigation();

  const refreshingList = async () => {
    setRefresing(!refreshing);

    // await setTimeout(() => setRefresing(!refreshing), 2000)
    loadData();
  }

  const loadData = async () => {
   const newAppointments = await AsyncStorage.getItem('appointments');
   console.log(newAppointments)

   if(newAppointments != null){
    setAppointments(JSON.parse(newAppointments))
   }
  }

  useEffect(() => {
    loadData();
  }, [appointments])

  const renderItem = ({ item }: any) => {
    // console.log('item', item)
    return (
        <View style={{flex: 1, width: '100%', flexDirection: 'row'}}>
          <Pressable
            style={({pressed}) => [
              {
                flex: 1,
              },
            ]}
            onPress={() => console.log('Press', item.id)}
            >
            <Styled.ItemContainer>
              <View style={{flex: 1}}>
                <Card mode='elevated'>
                  <Card.Title 
                    title={`Dr: ${item.doctor}`} 
                    subtitle={`Spec: ${item.specialty}`} 
                    titleNumberOfLines={2}
                    subtitleNumberOfLines={2}
                    titleStyle={{color: themeContext.color}}
                    subtitleStyle={{color: themeContext.color}}
                    right={() => (
                      <View style={{paddingRight: 15}}>
                        <Styled.ItemDate>Data: {moment(item.date).format('DD/MM/YYYY')}</Styled.ItemDate>
                        <Styled.ItemHourAndSpecialtyAndLocalization>Hora: {item.time}</Styled.ItemHourAndSpecialtyAndLocalization>
                      </View>
                    )} 
                  />
                </Card>
              </View>
            </Styled.ItemContainer>
          </Pressable>
          <View style={{ width: '20%', padding: 15}}>
            <TouchableOpacity
                onPress={() => {
                  console.log('Press')
                }}
                style={{
                  flex: 1,
                  borderRadius: 10,
                  width: '100%',
                  backgroundColor: themeContext.background === 'black' ? '#9c00005c' : '#ff0000',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                >
                  <Text style={{ color: themeContext === 'black' ? 'black' : 'white' }}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
    );
  };

  return (
    <Styled.Container>
      <Styled.ContainerButton>
        <Styled.PressableButton 
          onPress={() => navigation.navigate('AddNewRegistry')}>
            Adicionar consulta
        </Styled.PressableButton>
      </Styled.ContainerButton>

      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={EmptyComponent}
        ItemSeparatorComponent={() => (
          <Divider />
        )}
        refreshing={refreshing}
        onRefresh={() => refreshingList()}
      />
    </Styled.Container>
  );
};
  
export default HomeScreen;