/* importaciones */
import { useState } from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, Switch, Pressable, Alert, StyleSheet} from 'react-native';

export default function Practicareact() {

  /* guardar datos */
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  /* estados para el switch */
  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);


  /* funcion para enviar el registro */
  const enviarRegistro = () => {

    /* validar campos */
    if (
      nombre.trim() === '' ||
      carrera.trim() === '' ||
      semestre.trim() === ''
    ) {
      Alert.alert(
        'Error',
        'no puedes dejar campos vacios'
      );
      return;
    }

    /* validar que el semestre sea numerico */
    if (!/^\d+$/.test(semestre.trim())) {
      Alert.alert(
        'error',
        'el semestre debe ser numerico.'
      );
      return;
    }

    /* mostrar datos */
    Alert.alert(
      'Registro exitoso',
      'Nombre: ' + nombre +
      '\nCarrera: ' + carrera +
      '\nSemestre: ' + semestre +
      '\n\nTaller: ' + (taller ? 'si' : 'no') +
      '\nConstancia: ' + (constancia ? 'si' : 'no') +
      '\nDeportes: ' + (deportes ? 'si' : 'no')
    );
  };


  return (
    /* contenedor principal, scrollview y scrollview */
    <SafeAreaView style={styles.contenedor}>
      <ScrollView>
        <Text style={styles.titulo}>
          Registro de Evento Universitario
        </Text>

        <Text style={styles.subtitulo}>
          Ingresa tus datos para registrarte al evento
        </Text>


        {/* datos, textinput */}
        <Text style={styles.etiqueta}>
          Nombre completo:
        </Text>

        <TextInput
          style={styles.input}
          placeholder="ingresa tu nombre"
          value={nombre}
          onChangeText={setNombre}
        />


        <Text style={styles.etiqueta}>
          carrera:
        </Text>

        <TextInput style={styles.input}
          placeholder="ingresa tu carrera"
          value={carrera}
          onChangeText={setCarrera}
        />


        <Text style={styles.etiqueta}>
          semestre:
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ingresa tu semestre"
          value={semestre}
          onChangeText={setSemestre}
          keyboardType="numeric"
        />


        {/* preguntas, safeareaview y switch */}
        <Text style={styles.tituloSeccion}>
          preguntas del evento
        </Text>
        <SafeAreaView style={styles.fila}>
          <Text style={styles.pregunta}>
            ¿asistirás al taller?
          </Text>

          <Switch
            value={taller}
            onValueChange={setTaller}
          />
        </SafeAreaView>

        <SafeAreaView style={styles.fila}>
          <Text style={styles.pregunta}>
            ¿requieres constancia?
          </Text>

          <Switch
            value={constancia}
            onValueChange={setConstancia}
          />
        </SafeAreaView>

        <SafeAreaView style={styles.fila}>
          <Text style={styles.pregunta}>
            ¿participaras en actividades deportivas?
          </Text>
          <Switch
            value={deportes}
            onValueChange={setDeportes}
          />
        </SafeAreaView>


        {/* boton de registro, pressable */}
        <Pressable
          style={styles.boton}
          onPress={enviarRegistro}
        >
          <Text style={styles.textoboton}>
            enviar registro
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>

  );
}

/* estilos */
const styles = StyleSheet.create({

  contenedor: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#172554'
  },

  subtitulo: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 20
  },

  etiqueta: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 12,
    backgroundColor: 'white',
    marginTop: 8
  },

  tituloSeccion: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15,
    color: '#172554'
  },

  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12
  },

  pregunta: {
    fontSize: 15,
    flex: 1,
    marginRight: 10
  },

  boton: {
    backgroundColor: '#172554',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30
  },

  textoboton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17
  }

});