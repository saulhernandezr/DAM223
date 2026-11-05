/* zona de importaciones */
import { StyleSheet, Text, View, ImageBackground, Button, Image } from 'react-native';
import React, { useState, useEffect } from 'react';

/* zona de componentes o screens*/
export default function Imagescreen() {
  /* pantalla de inicio y efecto borroso */
  const [showSplash, setShowSplash] = useState(true);
  const [blurAmount, setBlurAmount] = useState(0);
  /* imagen de fondo */
  const bgMain={uri: 'https://i.blogs.es/fb2535/hello-orange-2/1366_2000.webp'};
  const logoApp = {
  uri: 'https://reactnative.dev/img/tiny_logo.png'
};

  /* splashscreen de 3 segundos */
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  /* fondo negro y cuadrado transparente */
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

  /* pantalla principal */
  return (
    <ImageBackground 
    source={bgMain} 
    style={styles.mainContainer} 
    resizeMode="cover" 
    blurRadius={blurAmount}>
      <View style={styles.mainCard}>
        <Text style={styles.welcomeText}>bienvenido a la app</Text>
        <Button 
        title={blurAmount===0 ? "Aplicar desenfoque": "Quitar desenfoque"} 
        onPress={() => setBlurAmount(blurAmount === 0 ? 6 : 0)} 
        />
      </View>
    </ImageBackground>
  );

}


/* zona esteticos */
const styles =StyleSheet.create({
  /* splashscreen: contenedor negro */
  splashBlackground: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent:'center',
    alignItems: 'center',
    paddingHorizontal:20,

  },
  transparentCard: {
    backgroundColor: 'rgba(76, 76, 76, 0.8)',
    borderWidth:1,
    paddingVertical: 35,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    width: '90%',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 15,
    resizeMode: 'contain',
  },
  splashTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  splashSubtitle: {
    fontSize: 14,
    color: '#CCCCCC',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  mainCard: {
    backgroundColor: 'rgba(255, 254, 254, 0.8)',
    padding: 30,
    borderRadius: 18,
    alignItems: 'center',
    width: '80%',
  },
  welcomeText:{
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
    marginBottom: 20,
    textAlign: 'center',
  },
});