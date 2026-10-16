import { View, Text, Button } from 'react-native';
import { useState } from 'react';

export const Perfil=({nombre, carrera, materia, cuatrimestre})=>{
    /* definir estado */
    const[mostrar,setMostrar]=useState(false);
   return (
        <View>
        <Text> {nombre}</Text>

        { mostrar && 
        <>
        <Text> {carrera}</Text>
        <Text> {materia} </Text>
        <Text> {cuatrimestre} </Text>
        
        </>
        }
        <Button title="Ver perfil" onPress={ ()=>setMostrar(true) }></Button>
</View>
);
};