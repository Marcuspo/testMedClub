import React, { useState, useContext, useRef } from 'react';
import { FlatList, View, Pressable, TouchableOpacity } from 'react-native';
import { Card, Divider, Text } from 'react-native-paper';
import moment from 'moment';
import { ThemeContext } from 'styled-components'
import { useNavigation } from '@react-navigation/native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';

import * as Styled from './Styles'
import { EmptyComponent } from './components/EmptyComponent/styles';

const HomeScreen = () => {
  const [consultas, setConsultas] = useState([
    { id: 1, data: new Date('2023-04-15T08:00:00'), medico: 'Dr. João', especialidade: 'Cardiologia', localizacao: 'Rua A, 123' },
    { id: 2, data: new Date('2023-04-20T10:30:00'), medico: 'Dra. Maria', especialidade: 'Dermatologia', localizacao: 'Rua B, 456' },
    { id: 3, data: new Date('2023-04-25T15:00:00'), medico: 'Dr. José', especialidade: 'Oftalmologia', localizacao: 'Rua C, 789' },
  ]);
  const [refreshing, setRefresing] = useState(false)

  const themeContext = useContext(ThemeContext)
  const navigation = useNavigation();

  const refreshingList = async () => {
    setRefresing(!refreshing);

    await setTimeout(() => setRefresing(!refreshing), 2000)
  }

  const renderItem = ({ item }: any) => {
    return (
        <View style={{flex: 1, width: '100%', flexDirection: 'row'}}>
          <Pressable
            style={({pressed}) => [
              {
                backgroundColor: pressed ? '#898989' : themeContext.background,
                flex: 1,
              },
            ]}>
            <Styled.ItemContainer>
              <View style={{flex: 1}}>
                <Card mode='elevated'>
                  <Card.Title 
                    title={item.medico} 
                    subtitle={item.especialidade} 
                    titleNumberOfLines={2}
                    subtitleNumberOfLines={2}
                    titleStyle={{color: themeContext.color}}
                    subtitleStyle={{color: themeContext.color}}
                    right={() => (
                      <View style={{paddingRight: 15}}>
                        <Styled.ItemDate>Data: {moment(item.data).format('DD/MM/YYYY')}</Styled.ItemDate>
                        <Styled.ItemHourAndSpecialtyAndLocalization>Hora: {moment(item.data).format('HH:mm')}</Styled.ItemHourAndSpecialtyAndLocalization>
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
          onPress={() => navigation.navigate('AddNewRegistry', {
            navigation
          })}>
            Adicionar consulta
        </Styled.PressableButton>
      </Styled.ContainerButton>

      <FlatList
        data={consultas}
        keyExtractor={(item) => item.id.toString()}
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