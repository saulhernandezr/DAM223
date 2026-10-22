/* zona de importaciones */
import { StyleSheet, Text, View,Image,Button } from 'react-native';
import { useState } from 'react';
import Safescreen from './Safescreen';
import Pressablescreen from './Pressablescreen';
import Tarjetasscreen from './Tarjetasscreen';

/* zona de componentes o screens*/
export default function Menuscreen() {
    const[screen,setscreen]=useState('menu');
    switch(screen){
        case 'safe':
            return <Safescreen/>;
        case 'press':
            return <Pressablescreen/>;
        case 'tarjetas':
            return <Tarjetasscreen/>;
        case 'menu':
            default:  
            return (
                <View style={styles.container}>
                <Text> menu de practicas</Text>

                <Button title="practica tarjetas" onPress={()=>setscreen('tarjetas')}></Button>
                <Button title="practica safeareaview" onPress={()=>setscreen('safe')}></Button>
                <Button title="practica pressable" onPress={()=>setscreen('press')}></Button>
                </View>
    );

  }/* switch */

}/* funcion */


/* zona esteticos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7d7d7d',
    /* alinea y posiciona los elementos */
    alignItems: 'center',
    justifyContent: 'center',

    
    flexDirection:'column',
    justifyContent: 'space-evenly',
  },


});