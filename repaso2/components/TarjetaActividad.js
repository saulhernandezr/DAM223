import { Text, StyleSheet, Pressable, View, Alert } from 'react-native';


export default function TarjetaActividad({nombre, descripcion, aviso}){
    const verActividad = () =>{
        window.alert(aviso);
        return
    }
    return(
        <View style = {style.container}>
            <Text style = {style.nombre}>{nombre}</Text>
            <Text>{descripcion}</Text>

            <Pressable
                onPress={verActividad}
                style = {style.boton}
            >
                
                <Text style = {style.nombre}>Ver actividad</Text>
            </Pressable>
        </View>
        
        
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        padding: 10,
        width: '100%',
    }, 
    nombre:{
        fontWeight: 'bold',
    },
    boton:{
        backgroundColor: '#561818',
        borderRadius: 20,
        padding: 10,
        width: '30%',
        alignItems: 'center',
        marginTop: 10,
    }
})