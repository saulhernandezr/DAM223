import { Text, StyleSheet, View } from "react-native";

export default function Encabezado({nombre, descripcion, color = '#8a5e5e'}){
    return(
        <View style = {[styles.container, {backgroundColor: color}]}>
            <Text style = {styles.nombre}>{nombre}</Text>
            <Text style = {styles.descripcion}>{descripcion}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '90%',
        marginBottom: 10,
        borderRadius: 20,
        padding: 20,
    },
    nombre: {
        fontWeight: 'bold',
        color: '#f8eaea',
    },
    descripcion:{},
})