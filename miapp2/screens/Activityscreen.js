/* zona de importaciones */
import { StyleSheet, Text, View, TextInput, ActivityIndicator, Import, KeyboardAvoidingView, Platform, Switch, Button } from 'react-native';
import React, {useState} from 'react';

/* zona de componentes o screens*/
export default function Activityscreen() {

  /* cambia color, muestra carga, cambia tamaño */
  const [cargando, setCargando] = useState(false);
  const [esGrande, setEsGrande] = useState(false);
  const [cambiarColor, setCambiarColor] = useState(false);

  /* simula el tiempo que esta cargando */
  const handleEnviar=()=> {
    setCargando(true);
    setTimeout(() => 
      setCargando(false), 4000
    );
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS==='ios'? 'padding': 'height'}
      keyboarVerticalOffset={20}
      style={styles.container}
    >
    <TextInput
    placeholder='escribe algo...'
    style={styles.input}
      />

      <View style={styles.actionContainer}>
    {cargando ? (<ActivityIndicator 
    size={esGrande ? 'large' : 'small'}
    color={cambiarColor ? 'red' : 'blue'}
    /> 
    ) : (
      <Button title = "Enviar"
      onPress={handleEnviar}
      />
    )}
      </View>
    <View style={styles.switchBox}>
      <View style={styles.switchBox}>
        <Text style={styles.switchText}>hacer grande</Text>
        <Switch value={esGrande} onValueChange={setEsGrande} />
      </View>
      <View style={styles.switchBox}>
        <Text style={styles.switchText}>cambiar color</Text>
        <Switch value={cambiarColor} onValueChange={setCambiarColor} />
      </View>
    </View>
    </KeyboardAvoidingView>
  );
}
/* zona esteticos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7d7d7d',
    /* alinea y posiciona los elementos */
    padding:20,
  },
  input:{
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  action:{
    height: 40,
    justifyContent: 'center',
    marginBottom: 20,
  },
  switchBox:{
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#fff',
  },
  switchRow:{
    felxDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 15,
  },
  switch:{
    fontSize: 10,
  },
});