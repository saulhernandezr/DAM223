/* zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Saludo } from './components/Saludo';
import { Saludo2 } from './components/Saludo2';
import { Perfil, estilos  } from './components/Perfil';

/* zona de componentes o screens*/
export default function App() {
  return (
    <View style={styles.container}>
      
      <Perfil nombre="saul hernandez" 
      carrera="TIID" 
      materia="Movil"
      cuatrimestre="Cuarto cuatrimestre"
        style={styles.tarjeta1}>
      </Perfil>

      <Perfil nombre="alfredo" 
      carrera="TIID" 
      materia="Movil"
      cuatrimestre="Cuarto cuatrimestre"
      style={styles.tarjeta2}>
      </Perfil>

      <Perfil nombre="paul" 
      carrera="TIID" 
      materia="Movil"
      cuatrimestre="Cuarto cuatrimestre"
      style={styles.tarjeta3}>
      </Perfil>

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
