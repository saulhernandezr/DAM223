/* zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './components/Saludo';

import {Saludo2} from './components/Saludo2';

/* zona de componentes o screens*/
export default function App() {
  return (
    <View style={styles.container}>
      <Text>hola mundo react native</Text>
      <StatusBar style="auto" />
      <Image source={require('./assets/wave.png')}></Image>
      <Saludo></Saludo>
      <Saludo2></Saludo2>
    </View>
  );
}
/* zona esteticos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
