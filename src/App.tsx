import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import moment from 'moment';

const App = () => {
  const [consultas, setConsultas] = useState([
    { id: 1, data: new Date('2023-04-15T08:00:00'), medico: 'Dr. João', especialidade: 'Cardiologia', localizacao: 'Rua A, 123' },
    { id: 2, data: new Date('2023-04-20T10:30:00'), medico: 'Dra. Maria', especialidade: 'Dermatologia', localizacao: 'Rua B, 456' },
    { id: 3, data: new Date('2023-04-25T15:00:00'), medico: 'Dr. José', especialidade: 'Oftalmologia', localizacao: 'Rua C, 789' },
  ]);


  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <Container style={styles.itemContainer}>
          <View style={styles.itemLeft}>
            <Text style={styles.itemData}>{moment(item.data).format('DD/MM/YYYY')}</Text>
            <Text style={styles.itemHora}>{moment(item.data).format('HH:mm')}</Text>
          </View>
          <View style={styles.itemRight}>
            <Text style={styles.itemMedico}>{item.medico}</Text>
            <Text style={styles.itemEspecialidade}>{item.especialidade}</Text>
            <Text style={styles.itemLocalizacao}>{item.localizacao}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={consultas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#fff',
  },
  itemContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: 16,
  paddingHorizontal: 20,
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
  },
  itemLeft: {
  alignItems: 'flex-start',
  },
  itemRight: {
  flex: 1,
  marginLeft: 16,
  },
  itemData: {
  fontSize: 16,
  fontWeight: 'bold',
  },
  itemHora: {
  fontSize: 14,
  color: '#888',
  },
  itemMedico: {
  fontSize: 16,
  fontWeight: 'bold',
  },
  itemEspecialidade: {
  fontSize: 14,
  color: '#888',
  },
  itemLocalizacao: {
  fontSize: 14,
  color: '#888',
  },
  });
  
  export default App;