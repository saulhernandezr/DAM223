/* zona de importaciones */
import { StyleSheet, Text, View,Image } from 'react-native';
import { Perfil } from '../components/Perfil';

/* zona de componentes o screens*/
export default function Tarjetasscreen() {
  return (
    <View style={styles.container}>
      <Perfil>
        Saul Hernandez
      </Perfil>
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
