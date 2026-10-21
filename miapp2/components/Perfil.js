import { View, Text, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

export const Perfil=({nombre,carrera,materia,cuatrimestre,style})=>{
  const[mostrar,setMostrar]=useState(false);
  /* retorna textos y agrega estilos */
  return(
    <View style={[estilos.tarjeta, style]}>
      <Text style={estilos.nombres}> {nombre}</Text>
      
      {mostrar &&
      <>
      <Text style={estilos.carrera}> {carrera}</Text>
      <Text style={estilos.otrotexto}> {materia} </Text>
      <Text style={estilos.otrotexto}> {cuatrimestre} </Text>
      </>
      }
      <Button title="Ver perfil" onPress={ ()=>setMostrar(true) }></Button>
    </View>
  );
}
    /* establece estilos */
    const estilos=StyleSheet.create({
        nombres:{
        fontSize:24,
        fontWeight:800,
        texttransform:'uppercase',
        },
        carrera:{
        fontSize:20,
        fontfamily:'serif',
        color:'blue',
        },
        otrotexto:{
        fontSize:18,
        fontfamily:'serif',
        color:'green',
        },
        tarjeta:{
        borderWidth:4,
        borderRadius:10,
        padding:10,
        margin:10,
        
        },
    });