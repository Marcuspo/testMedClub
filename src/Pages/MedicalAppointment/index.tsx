import React, { useContext, useState } from 'react';
import { Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Button as ButtonPapper, Snackbar } from 'react-native-paper';
import moment from 'moment';

import * as Styles from './styles'
import { useNavigation, useRoute } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';

const RegisterAppointment = () => {
     const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
     const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
     const [snackBarVisible, setSnackBarVisible] = React.useState(false);
     const [date, setDate] = useState('');
     const [time, setTime] = useState('');
     const [doctor, setDoctor] = useState('');
     const [specialty, setSpecialty] = useState('');
     const [location, setLocation] = useState('');

     const useRoutes = useRoute()
     const navigation = useNavigation();
     const themeContext = useContext(ThemeContext)
   
     const showDatePicker = () => {
       setDatePickerVisibility(true);
     };

     const showTimePicker = () => {
      setTimePickerVisibility(true);
     };
   
     const hideDatePicker = () => {
       setDatePickerVisibility(false);
     };

     const hideTimePicker = () => {
        setTimePickerVisibility(false);
      };

      const onToggleSnackBar = () => setSnackBarVisible(!snackBarVisible);

      const onDismissSnackBar = () => setSnackBarVisible(false);
   
     const handleConfirmDate = (selectedDate: { toISOString: () => string; }) => {
        setDate(selectedDate.toISOString().split('T')[0]);
        hideDatePicker();
      };
      
      const handleConfirmTime = (selectedTime: { toLocaleTimeString: (arg0: string, arg1: { hour: string; minute: string; }) => React.SetStateAction<string>; }) => {
        setTime(selectedTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }));
        hideTimePicker();
      };
   
      const saveAppointment = async () => {
        const appointment = {
          id: Date.now(),
          date,
          time,
          doctor,
          specialty,
          location,
        };
        try {
          const savedAppointments = await AsyncStorage.getItem('appointments');
          let appointments = [];
          if (savedAppointments !== null) {
            appointments = JSON.parse(savedAppointments);
          }
          appointments.push(appointment);
          await AsyncStorage.setItem('appointments', JSON.stringify(appointments));
          setDate('');
          setTime('');
          setDoctor('');
          setSpecialty('');
          setLocation('');
          onToggleSnackBar();
          setTimeout(onDismissSnackBar, 2000)
          Keyboard.dismiss();
        } catch (error) {
          console.error(error);
        }
      };

  return (
    <Styles.Container>
      <Styles.ButtonGoBack>
        <ButtonPapper mode="outlined" onPress={() => {
          useRoutes.params.loadData();
          navigation.goBack()
        }}>
          Voltar
        </ButtonPapper>
      </Styles.ButtonGoBack>
      <Styles.ContainerInside>
        <Styles.ContainerDateAndTimer>
          <Styles.TextDateAndHour>Data:</Styles.TextDateAndHour>
          <ButtonPapper dark mode="outlined" onPress={showDatePicker}>
            {date ? moment(date).format('DD/MM/YYYY') : "Selecione a data"}
          </ButtonPapper>
        </Styles.ContainerDateAndTimer>
        <Styles.ContainerDateAndTimer>
          <Styles.TextDateAndHour>Hora:</Styles.TextDateAndHour>
          <ButtonPapper dark mode="outlined" onPress={showTimePicker}>
            {time || "Selecione a hora"}
          </ButtonPapper>
        </Styles.ContainerDateAndTimer>

        <Styles.Input
          placeholder="Médico"
          value={doctor}
          onChangeText={setDoctor}
        />
        <Styles.Input
          placeholder="Especialidade"
          value={specialty}
          onChangeText={setSpecialty}
        />
        <Styles.Input
          placeholder="Localização"
          value={location}
          onChangeText={setLocation}
        />

        <ButtonPapper dark mode="outlined" onPress={saveAppointment} disabled={!date || !time || !doctor || !specialty || !location}>
          Salvar
        </ButtonPapper>

      <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirmDate}
          onCancel={hideDatePicker}
          confirmTextIOS="Confirmar"
          cancelTextIOS="Cancelar"
          locale="pt_BR"
          minimumDate={new Date(Date.now())}
        />
      <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          locale="en_GB"
          onConfirm={handleConfirmTime}
          onCancel={hideTimePicker}
        />

        <Snackbar
            visible={snackBarVisible}
            onDismiss={onDismissSnackBar}
            style={{backgroundColor: themeContext.color}}
            >
            Consulta salva com sucesso!
        </Snackbar>
      </Styles.ContainerInside>
    </Styles.Container>
  );
};

export default RegisterAppointment;