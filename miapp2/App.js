/* zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Saludo } from './components/Saludo';
import { Saludo2 } from './components/Saludo2';
import { Perfil } from './components/Perfil';

/* zona de componentes o screens*/
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola dulcesita REACT NATIVE</Text>
      <Image source={require('./assets/wave.png')}></Image>
      <Saludo></Saludo>
      <Saludo2></Saludo2>
      <Perfil nombre="saul hernandez" 
      carrera="TIID" 
      materia="Movil"
      cuatrimestre="Cuarto cuatrimestre">
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
