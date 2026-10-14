import { Text, Image, View, Button } from 'react-native';

export const Saludo2=()=>{
    return(
        <View>
        <Text> Hola  RN: Componente propio </Text>
        <Image source={require('../assets/wave.png')}></Image>
        <Button title="presiona para saludar"> </Button>
        </View>
)
}