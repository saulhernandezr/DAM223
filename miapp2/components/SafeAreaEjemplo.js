/* 1.ZONA DE IMPORTACIONES */
import { useState } from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/* 2.ZONA DEL MAIN(COMPONENTES, SCREENS) / EJECUCION*/
export default function SafeAreaEjemplo() {
  const [mensaje, setMensaje] = useState('Bienvenidos a nuestra practica');
  return (
    <SafeAreaView style={styles.container} edges={['top','bottom']}>
      <Text style={styles.titulo}>Ejemplo de SafeAreaView</Text>
      <Text style={styles.mensaje}>{mensaje}</Text>

      <Button
        title="Cambiar mensaje"
        onPress={() => setMensaje(mensaje === 'Esta es nuestra practica' ? 'HOLAA' : 'Esta es nuestra practica')}
      />
    </SafeAreaView>
  );
}
/* 3.ZONA DE LA ESTETICA */
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mensaje: {
    fontSize: 16,
    marginBottom: 10,
  }
});
