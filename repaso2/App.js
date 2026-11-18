import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import Encabezado from './components/Encabezado';
import TarjetaActividad from './components/TarjetaActividad';
import { useState, useEffect } from 'react';

export default function App() {
  const actividades =[
    {id: '1', nombre: 'Estudiar React Native', descripcion: 'Repasa los componentes de la libreria'},
    {id: '2', nombre: 'Realizar practica de javascript', descripcion: 'Completa los ejercicios del laboratorio'},
    {id: '3', nombre: 'Entregar proyecto escolar', descripcion: 'Enviar tu proyecto final del cuatrimestre'},
    {id: '4', nombre: 'Preparar Examen', descripcion: 'Estudia los temas principales'}
  ]
  

  return (
    <View style={styles.container}>
      <Encabezado 
        nombre={'Mi Dia Universitario'}
        descripcion={'Organiza tus actividades'}
        color='#eb6868'
      />

      <Encabezado
        nombre={'¡Hola estudiante!'}
        descripcion={'Hoy es un buen dia para cumplir tus objetios'}
        color='#ac3636'
      />

      <View style ={styles.actividades}>
        <Text style = {styles.texto}>Mis actividades</Text>
        <TarjetaActividad
          actividad={actividades[0].nombre}
          descripcion={actividades[0].descripcion}
          aviso={'Recuerda repasar los componentes de React Native'}
        />
        <TarjetaActividad
          nombre={'Realizar practica de javascript'}
          descripcion={'Completa los ejercicios del laboratorio'}
        />
        <TarjetaActividad
          nombre={'Entregar proyecto escolar'}
          descripcion={'Enviar tu proyecto final del cuatrimestre'}
        />
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbcece',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actividades: {
    width: '90%'
  },
  texto: {
    fontWeight: 'bold',
    marginBottom: 10
  }
});
