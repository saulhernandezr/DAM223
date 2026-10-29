/* zona de importaciones */
import { StyleSheet, Text, View,Image, Pressable, Switch } from 'react-native';
import { useState } from 'react';

/* zona de componentes o screens*/
export default function Pressablescreen() {
  /* constantes para el estado del switch t el de pressable */
  const [encendido, setEncendido] =useState(false);
  const [contador, setContador] = useState(0);
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>practica: switch y pressable</Text>
      <Switch
        value={encendido}
        onValueChange={(valor)=>setEncendido(valor)}
      />
      <Text style={styles.texto}>
        el switch esta: {encendido ? 'Encendido': 'apagado'}
      </Text>

      <Pressable 
        style={styles.boton}
        onPress={()=>setContador(contador + 1)}
      >
          <Text style={styles.textoBoton}>presioname</Text>
      </Pressable>

      <Text style={styles.texto}> veces presionado: {contador}
        </Text>
      </View>
  );
};


/* zona esteticos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7d7d7d',
    /* alinea y posiciona los elementos */
    alignItems: 'center',
    justifyContent: 'center',

    
    flexDirection:'column',
    justifyContent: 'space-evenly',
  },
  titulo:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:40,

  },
  texto:{
    fontsize:18,
    marginVertical: 15,

  },
  boton:{
    backgroundColor: 'blue',
    padding:15,
    borderRadius:10,
    marginTop:30,
  },
  textoBoton:{
    color:'white',
    fontsize:18,
    fontWeight:'bold',
  },

});