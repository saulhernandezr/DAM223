/* zona de importaciones */
import { StyleSheet, Text, View,Image,Button } from 'react-native';
import { useState } from 'react';
import Safescreen from './Safescreen';
import Pressablescreen from './Pressablescreen';
import Tarjetasscreen from './Tarjetasscreen';
import Textscreen from './Textscreen';
import Flatscreen from './FlatScreen';
import Imagescreen from './Imagescreen';
import Modalscreen from './Modalscreen';
import Activityscreen from './Activityscreen';
import Practicareact from './Practicareact';

/* zona de componentes o screens*/
export default function Menuscreen() {
    
    const[screen,setscreen]=useState('menu');
    switch(screen){
        case 'safe':
            return <Safescreen/>;
        case 'press':
            return <Pressablescreen/>;
        case 'text':
            return <Textscreen/>
            
        case 'flat':
            return <Flatscreen/>;
        case 'image':
            return <Imagescreen/>;
        case 'modal':
            return <Modalscreen/>
        case 'activity':
            return <Activityscreen/>
        case 'tarjetas':
            return <Tarjetasscreen/>;
        case 'practica':
            return <Practicareact/>
        
        case 'menu':
            default:  
            return (
                <View style={styles.container}>
                <Text> menu de practicas</Text>

                <Button title="practica tarjetas" onPress={()=>setscreen('tarjetas')}></Button>
                <Button title="practica safeareaview" onPress={()=>setscreen('safe')}></Button>
                <Button title="practica pressable" onPress={()=>setscreen('press')}></Button>
                <Button title="practica text" onPress={()=>setscreen('text')}></Button>
                <Button title="practica flatlist" onPress={()=>setscreen('flat')}></Button>
                <Button title="practica imagebackgroung" onPress={()=>setscreen('image')}></Button>
                <Button title="practica modal" onPress={()=>setscreen('modal')}></Button>
                <Button title="practica react" onPress={()=>setscreen('practica')}></Button>
                <Button title="practica activityindicator" onPress={()=>setscreen('activity')}></Button>
                
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