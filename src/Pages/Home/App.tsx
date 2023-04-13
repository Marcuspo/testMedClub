import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar, Button, Card, Text as TextPaper } from 'react-native-paper';
import moment from 'moment';

import * as Styled from './Styles'

const HomeScreen = () => {
  const [consultas, setConsultas] = useState([
    { id: 1, data: new Date('2023-04-15T08:00:00'), medico: 'Dr. João', especialidade: 'Cardiologia', localizacao: 'Rua A, 123' },
    { id: 2, data: new Date('2023-04-20T10:30:00'), medico: 'Dra. Maria', especialidade: 'Dermatologia', localizacao: 'Rua B, 456' },
    { id: 3, data: new Date('2023-04-25T15:00:00'), medico: 'Dr. José', especialidade: 'Oftalmologia', localizacao: 'Rua C, 789' },
  ]);

  const renderItem = ({ item }: any) => {

    function getNumberRandom() {
      const min = 1;
      const max = 1000;
      const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

      return `https://picsum.photos/${numeroAleatorio}`;
    }

    return (
      <TouchableOpacity activeOpacity={0.9}>
        <Styled.ItemContainer>
          <View style={{flex: 1}}>
            <Card mode='elevated'>
              <Card.Title 
                title={item.medico} 
                subtitle={item.especialidade} 
                right={() => (
                  <View style={{paddingRight: 15}}>
                    <Styled.ItemDate>Data: {moment(item.data).format('DD/MM/YYYY')}</Styled.ItemDate>
                    <Styled.ItemHourAndSpecialtyAndLocalization>Hora: {moment(item.data).format('HH:mm')}</Styled.ItemHourAndSpecialtyAndLocalization>
                  </View>
                )} 
              />
              <Card.Content style={{flex: 1, width: '100%', flexDirection: 'row', paddingTop: 15}}>
                <Styled.ItemHourAndSpecialtyAndLocalization>{item.localizacao}</Styled.ItemHourAndSpecialtyAndLocalization>
              </Card.Content>
            </Card>
          </View>
        </Styled.ItemContainer>
      </TouchableOpacity>
    );
  };

  return (
    <Styled.Container>
      <FlatList
        data={consultas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Styled.Container>
  );
};
  
export default HomeScreen;