import React, { useState, useContext, useEffect } from 'react';
import { FlatList, View, Pressable, TouchableOpacity } from 'react-native';
import { Card, Divider, Text, Button } from 'react-native-paper';
import moment from 'moment';
import { ThemeContext } from 'styled-components'
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";

import * as Styled from './Styles'
import EmptyComponent  from './components/EmptyComponent/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const [appointments, setAppointments] = useState([]);
  const [refreshing, setRefresing] = useState(false)
  const [visibleModal, setVisibleModal] = useState(false)

  const themeContext = useContext(ThemeContext)
  const navigation = useNavigation();

  const showModalInformations = () => {
    setVisibleModal(true);
  }

  const hideModal = () => {
    setVisibleModal(false)
  };

  const refreshingList = async () => {
    setRefresing(!refreshing);

    setTimeout(() => setRefresing(false), 200)
    loadData();
  }

  const deleteData = async (id: number) => {
    try {
      const updatedAppointments = appointments.filter(appointment => appointment.id !== id);
      setAppointments(updatedAppointments)
      AsyncStorage.setItem('appointments', JSON.stringify(updatedAppointments));

    } catch (error) {
      console.log(error);
    }
  };

  const loadData = async () => {
   const newAppointments = await AsyncStorage.getItem('appointments');
  //  await AsyncStorage.removeItem('appointments')
  console.log('appointments', newAppointments)

   if(newAppointments != null){
    setAppointments(JSON.parse(newAppointments))
   }
  }

  useEffect(() => {
    loadData();
  }, [])

  const renderItem = ({ item, index }: any) => {
    return (
        <View style={{flex: 1, width: '100%', flexDirection: 'row'}}>
          <Pressable
            style={({pressed}) => [
              {
                flex: 1,
              },
            ]}
            onPress={() => showModalInformations()}
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
                  deleteData(item.id)
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

              <Modal 
                isVisible={visibleModal} 
                animationIn='zoomIn' 
                animationOut='zoomOut'
                backdropOpacity={0.8}
                onBackButtonPress={() => hideModal()}
                onBackdropPress={() => hideModal()}
                useNativeDriver
                useNativeDriverForBackdrop
                hideModalContentWhileAnimating
                >
                  <Styled.ContainerModal>
                    <View style={{flexDirection: 'row'}}>
                      <View style={{width: '50%'}}>
                        <Styled.TextModal>Doutor:</Styled.TextModal>
                        <Styled.TextModal>Especialidade:</Styled.TextModal>
                        <Styled.TextModal>Data:</Styled.TextModal>
                        <Styled.TextModal>Hora:</Styled.TextModal>
                        <Styled.TextModal>Local:</Styled.TextModal>
                      </View>

                      <View style={{width: '50%'}}>
                        <Styled.TextModal>{item.doctor}</Styled.TextModal>
                        <Styled.TextModal>{item.specialty}</Styled.TextModal>
                        <Styled.TextModal>{moment(item.date).format('DD/MM/YYYY')}</Styled.TextModal>
                        <Styled.TextModal>{item.time}</Styled.TextModal>
                        <Styled.TextModal>{item.location}</Styled.TextModal>
                      </View>
                    </View>
                    <View style={{paddingTop: 20}}>
                      <Button dark mode="outlined" onPress={hideModal}>
                        Fechar
                      </Button>
                    </View>
                  </Styled.ContainerModal>
              </Modal>
          </View>
    );
  };

  return (
    <Styled.Container>
      <Styled.ContainerButton>
        <Styled.PressableButton 
          onPress={() => navigation.navigate('AddNewRegistry', {
            loadData: loadData
          })}>
            Adicionar consulta
        </Styled.PressableButton>
      </Styled.ContainerButton>

      <FlatList
        data={appointments}
        keyExtractor={(item, index) => item.id != null ? item.id : index}
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