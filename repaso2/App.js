/* importaciones */
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  FlatList,
  TextInput,
  ActivityIndicator, Alert, Pressable } from 'react-native';

export default function App() {
/* constantes  */
  const [showSplash, setShowSplash] = useState(true);
  const [cargando, setCargando] = useState(false);
  const [libros, setLibros] = useState([]);
/* estados para los campos del formulario */
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');

  /* imagenes */
  const bgMain = {
    uri: 'https://i.blogs.es/fb2535/hello-orange-2/1366_2000.webp'
  };
  const logoApp = {
    uri: 'https://reactnative.dev/img/tiny_logo.png'
  };

  /* tiempo de espera */
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  /* agregar libros */
  const enviarinfo = () => {

    /* validar campos */
    if (
      titulo.trim() === '' ||
      autor.trim() === '' ||
      genero.trim() === ''
    ) {
      Alert.alert(
        'Error',
        'No puedes dejar campos vacios'
      );
      return;
    }

    /* activar indicador de carga */
    setCargando(true);
    setTimeout(() => {
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: titulo,
        autor: autor,
        genero: genero
      };

      /* agregar libro a la lista */
      setLibros((librosAnteriores) => [
        ...librosAnteriores, nuevoLibro
      ]);

      /* limpiar formulario */
      setTitulo('');
      setAutor('');
      setGenero('');

      
      setCargando(false);

      /* notificacion */
      Alert.alert(
        'Registro exitoso',
        'El libro se agregó correctamente'
      );
    }, 4000);
  };

  /* splashscreen */
  if (showSplash) {
    return (
      <View style={styles.splashBlackground}>
        <View style={styles.transparentCard}>

          <Image
            source={logoApp}
            style={styles.logo}
          />
          <Text style={styles.splashTitle}>
            Mi aplicacion
          </Text>

          <Text style={styles.splashSubtitle}>
            Cargando experiencia
          </Text>

        </View>
      </View>
    );
  }

  /* pantalla principal */
  return (
    <ImageBackground
      source={bgMain}
      style={styles.mainContainer}
      resizeMode="cover"
    >

      <Text style={styles.tituloPrincipal}>
        Registro de libros
      </Text>

      {/* formulario*/}

      <TextInput
        style={styles.input}
        placeholder="Titulo del libro"
        value={titulo}
        onChangeText={setTitulo}
      />

      <TextInput
        style={styles.input}
        placeholder="Autor del libro"
        value={autor}
        onChangeText={setAutor}
      />

      <TextInput
        style={styles.input}
        placeholder="Genero del libro"
        value={genero}
        onChangeText={setGenero}
      />

      {/* boton para agregar el libro */}

      <Pressable
        style={styles.boton}
        onPress={enviarinfo}
        disabled={cargando}
      >
        <Text style={styles.textoBoton}>
          Agregar libro
        </Text>
      </Pressable>

      {cargando && (
        <View>
          <ActivityIndicator
            size="large"
            color="blue"
          />

          <Text>
            Guardando libro
          </Text>
        </View>
      )}

      {/* lista de libros */}

      <FlatList
        data={libros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <View style={styles.tarjeta}>
            <Text style={styles.textoLibro}>
              Titulo: {item.titulo}
            </Text>
            <Text>
              Autor: {item.autor}
            </Text>
            <Text>
              Genero: {item.genero}
            </Text>
          </View>

        )}
        ListEmptyComponent={
          <Text style={styles.textoVacio}>
            Todavia no hay libros registrados
          </Text>
        }
      />

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splashBlackground: {
    flex: 1,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
  },
  transparentCard:{
    alignItems: 'center',
  },
  logo:{
    width: 80,
    height: 80,
  },
  splashTitle:{
    color: 'white',
    fontSize: 25,
    marginTop: 15,
  },
  splashSubtitle:{
    color: 'white',
    fontSize: 16,
  },
  mainContainer:{
    flex: 1,
    padding: 20,
  },
  tituloPrincipal:{
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  input:{
    backgroundColor: 'white',
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
  },
  boton:{
    backgroundColor: '#3333aa',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBoton:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tarjeta:{
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  textoLibro:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  textoVacio:{
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },

});
