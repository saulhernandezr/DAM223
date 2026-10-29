/* zona de importaciones */
import { StyleSheet, Text, View,Image } from 'react-native';

/* zona de componentes o screens*/
export default function Imagescreen() {
  return (
    <View style={styles.container}>
      <Text>aqui va la practica 14</Text>
      <Text>equipo Paloma</Text>
    </View>
  );
}


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


});