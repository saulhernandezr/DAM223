/* 1. ZONA DE IMPORTACIONES */
import { useState } from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';

/* 2. ZONA DEL MAIN / EJECUCION */
export default function ScrollViewEjemplo() {
  const [desplazar, setDesplazar] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Ejemplo de ScrollView
      </Text>

      <Button
        title={desplazar
            ? 'Desactivar desplazamiento'
            : 'Activar desplazamiento'} onPress={() => setDesplazar(!desplazar)}/>

      <ScrollView
        style={styles.lista}
        contentContainerStyle={styles.contenido}
        showsVerticalScrollIndicator={true}
        scrollEnabled={desplazar}>
            
        <View style={styles.tarjeta1}>
          <Text>Tarjeta 1 - Dulce</Text>
        </View>

        <View style={styles.tarjeta2}>
          <Text>Tarjeta 2 - Saul</Text>
        </View>

        <View style={styles.tarjeta3}>
          <Text>Tarjeta 3 - Karla</Text>
        </View>

        <View style={styles.tarjeta4}>
          <Text>Tarjeta 4 - Equipo Dulce</Text>
        </View>

        <View style={styles.tarjeta5}>
          <Text>Tarjeta 5 - Practica 10</Text>
        </View>
      </ScrollView>
    </View>
  );
}

/* 3. ZONA DE LA ESTETICA */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  lista: {
    height: 200,
  flexGrow: 0,
  marginTop: 10,
  },
  contenido: {
    paddingBottom: 20,
  },
  tarjeta1: {
    backgroundColor: 'pink',
    padding: 25,
    marginBottom: 10,
    borderRadius: 8,
  },
  tarjeta2: {
    backgroundColor: 'violet',
    padding: 25,
    marginBottom: 10,
    borderRadius: 8,
  },
  tarjeta3: {
    backgroundColor: 'azure',
    padding: 25,
    marginBottom: 10,
    borderRadius: 8,
  },
  tarjeta4: {
    backgroundColor: 'lightblue',
    padding: 25,
    marginBottom: 10,
    borderRadius: 8,
  },
  tarjeta5: {
    backgroundColor: 'lightgreen',
    padding: 25,
    marginBottom: 10,
    borderRadius: 8,
  },
});
