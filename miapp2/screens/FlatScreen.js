/* zona de importaciones */
import { StyleSheet, Text, View,Image } from 'react-native';

/* zona de componentes o screens*/
export default function Flatscreen() {
  return (
    <View style={styles.container}>
      <Text>aqui va la practica 13</Text>
      <Text>equipo Natalia</Text>
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