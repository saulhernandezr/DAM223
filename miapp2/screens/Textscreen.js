/* zona de importaciones */
import { StyleSheet, Text, View, Alert, TextInput, Button, Platform } from 'react-native';
import { useState } from 'react';


/* zona de componentes o screens*/
/* mensaje de alerta */
const mostrarAlerta=(titulo,mensaje)=>{
  if(Platform.OS==='web'){
    window.alert('${titulo} \n\n ${mensaje}');
  }else{
    Alert.alert(titulo,mensaje);
  }
};

export default function Textscreen() {
  const[nombre,setNombre]=useState('');
  const[correo,setCorreo]=useState('');
  const[telefono,setTelefono]=useState('');


  const registrar =()=>{
    const faltantes=[];
    if(nombre.trim()===''){
      faltantes.push('Nombre');
    }
    if(correo.trim()===''){
      faltantes.push('Correo');
    }
    if(telefono.trim()===''){
      faltantes.push('Telefono');
    }

    /* faltantes en el formulario */
    if(faltantes.length>0){
      mostrarAlerta('faltan datos', 'completa: '+faltantes.join(','));
      return;
    }
  

    if(!correo.includes('@')){
      mostrarAlerta('correo invalido','el correo debe contener un @');
      return;
    }
    if(telefono.length!==10){
      mostrarAlerta('telefono invalido','debe tenr 10 digitos');
      return;
    }

  mostrarAlerta('Datos registrados correctamente', 'Nombre: ${nombre}\n Correo: ${correo}\n Telefono: ${telefono}' );
  
  setNombre('');
  setCorreo('');
  setTelefono('');

  
  };
  return(
    
    <View style={styles.contenedor}>
    <Text style={styles.titulo}>registro de dato </Text>

    <TextInput
    style={styles.input}
    placeholder="Nombre"
    value={nombre}
    onChangeText={setNombre}
    />
    

    <TextInput
    style={styles.input}
    placeholder="Correo"
    value={correo}
    onChangeText={setCorreo}
    keyboardType="email-address"
    autoCapitalize="none"

    />

    <TextInput
    style={styles.input}
    placeholder="Telefono"
    value={telefono}
    onChangeText={setTelefono}
    keyboardType="numeric"
    maxlength={10}
    />
    <Button title="Registrar"
    onPress={registrar}/>

    
    </View>

  );
}





/* zona esteticos */
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#eae3e3',
    /* alinea y posiciona los elementos */
    alignItems: 'center',
    justifyContent: 'center',

    
    flexDirection:'column',
    justifyContent: 'space-evenly',
    padding:20,
    maxWidth:400,
    width:'100%',
    alignSelf:'center'

  },
  titulo:{
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:10,

  },
  input:{
    borderWidth:10,
    borderColor: '#999',
    borderRadius: 4,
    padding:10,
    marginBottom: 12,
  },
});