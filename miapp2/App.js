/* zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Perfil } from './components/Perfil';
import Menuscreen from './screens/Menuscreen';

/* zona de componentes o screens*/
export default function App() {
  return (
    <View style={styles.container}>
      <Menuscreen></Menuscreen>

     

      <StatusBar style="auto" />
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

    
    flexDirection:'row',
    justifyContent: 'space-evenly',
  },

  /* a cada tarjeta le agrega un color de fondo */
  tarjeta1:{backgroundColor:'white'},
  tarjeta2:{backgroundColor:'orange'},
  tarjeta3:{backgroundColor:'yellow'},

});
