import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, Image, FlatList, TextInput, ActivityIndicator, Alert } from 'react-native';



export default function App(){
      const [showSplash, setShowSplash] = useState(true);
      const [blurAmount, setBlurAmount] = useState(0);

    const bgMain={uri: 'https://i.blogs.es/fb2535/hello-orange-2/1366_2000.webp'};
    const logoApp = {
    uri: 'https://reactnative.dev/img/tiny_logo.png'
};
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  
  const [titulo, setTitulo]= useState(false);
    const [autor, setAutor]= useState(false);
    const [genero, setGenero]= useState(false)
  
    const enviarinfo=()=>{
    if (
      titulo.trim() === '' ||
      autor.trim() === '' ||
      genero.trim() === ''
    ) {
      Alert.alert(
        'Error',
        'no puedes dejar campos vacios'
      );
      return;
    }
        Alert.alert(
      'Registro exitoso',
      'Titulo: ' + titulo +
      '\nAutor: ' + autor +
      '\nGenero: ' + genero 
      
    );
}

    if(showSplash){
      return (
        <View style={styles.splashBlackground}>
          <View style={styles.transparentCard}>
          <Image 
          source={logoApp} 
          style={styles.logo} />
            
            <Text style={styles.splashTitle}>mi aplicacion</Text>
            <Text style={styles.splashSubtitle}>cargando experiencia</Text>
          </View>
        </View>
      );
    }

    return(
            <ImageBackground 
            source={bgMain} 
            style={styles.mainContainer} 
            resizeMode="cover" 
            blurRadius={blurAmount}>
                <TextInput placeholder='titulo del libro'
                value={titulo}
                onChange={setTitulo}
                />
                <TextInput
                placeholder='autor del libro'
                value={autor}
                onChange={setAutor}
                />
                <TextInput
                placeholder='genero del libro'
                value={genero}
                onChange={setGenero}
                />
                <Pressable 
                style={styles.boton}
                onPress={enviarinfo}
                >
                  <Text style={styles.textoBoton}>enviar</Text>
                </Pressable>
                
            </ImageBackground>
    )
}
