import {Tabs} from "expo-router";
import {Ionicons} from "react-native";

export default function TabsLayout(){
    return(
    <Tabs>
        <Tabs.Screen
            name="index"
            options={{title: "Inicio", href:null}}
        />
        <Tabs.Screen
            name="alta"
            options={{title:"Formulario"}}
        />
         <Tabs.Screen
            name="consulta"
            options={{title:"listado",
                tabBarIcon:({color,size})=>(<Ionicons name="person-add" size={15} color={"red"}/>)
            }}
        />
    </Tabs>
    )
}