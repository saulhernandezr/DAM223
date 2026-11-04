/* zona de importaciones */
import { StyleSheet, Text, View, TextInput, Button, FlatList, SectionList, Pressable } from 'react-native';
import { useState } from 'react';

/* zona de componentes o screens*/
const tareasIniciales=[
 { id: "1", nombre: "Estudiar React Native" },
  { id: "2", nombre: "Practicar JavaScript" },
  { id: "3", nombre: "Preparar la exposición" },

]
  
const contactos=[
  {
  title:"A",
  data: [
    {id: "c1", nombre: "Ana", telefono: "555-1001" },
    {id: "c2", nombre: "Andres", telefono: "555-1002" },
  ],
  },
  {
    title:"B",
    data:[
      {id: "c3", nombre: "Brenda", telefono: "555-1003" },
      {id: "c4", nombre: "Bruno", telefono: "555-1004" },
    ],
  },
  { title: "C", data: [{ id: "c5", nombre: "Carlos", telefono: "555-1005" }] },
];
  
const Separador = () => <View style={styles.separador} />;

/* flatlist + estados */

export function PantallaTareas(){
  const [tareas, setTareas]=useState (tareasIniciales);
  const [texto, setTexto]=useState("");
  const [seleccionado, setSeleccionado]= useState(null);
  const [refreshing, setRefreshing]= useState(false);

  const agregarTarea = () => {
    if (!texto.trim()) return;
    setTareas((anteriores) => [
      ...anteriores,
      { id: String(Date.now()), nombre: texto.trim() },
    ]);
    setTexto('');
  };

const actualizar =()=>{
  setRefreshing(true);
  setTimeout(()=>{
    setTareas(tareasIniciales),
    setRefreshing(false);
  }, 1000);
};

return (
  /* pantalla de tareas con FlatList */
  <View style={styles.pantalla}>
    <TextInput
    style={styles.input}
    placeholder= "Nueva tarea"
    value= {texto}
    onChangeText={setTexto}
    />
    <View style={styles.fila}>
      <Button title="agregar" onPress={agregarTarea}/>
      <Button title="vaciar" onPress={()=>setTareas([])}/>
      </View>
      
       <FlatList
        data={tareas}
        keyExtractor={(item) => item.id}
        extraData={seleccionado}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => setSeleccionado(item.id)}
            style={[
              styles.item,
              item.id === seleccionado && styles.seleccionado,
            ]}
          >

      <Text>{item.nombre}</Text>
      </Pressable>
    
)}
Listheadercomponent={
  <Text style={styles.titulo}>tareas ({tareas.length})</Text>

}
ListFooterComponent={
  <Text style={styles.pie}>fin de la lista</Text>
}
ItemSeparatorComponent={Separador}
ListEmptyComponent={
  <Text style={styles.vacio}>no hay tareas registradas</Text> 
}
refreshing ={refreshing}
onRefresh={actualizar}
initialNumtoRender={10}
    />

  </View>
); 
}

/* pantalla de contactos */
export function PantallaContactos() {
  const [busqueda, setBusqueda]=useState('');
  const [favoritos, setFavoritos]=useState([]);

  const alternarfavorito=(id)=>{
    setFavoritos((anteriores)=> anteriores.includes(id)
    ?anteriores.filter((f)=>f===id)
    :[...anteriores],
  );
  }
const secciones=contactos.map((s)=>({
  ...s,
  data: s.data.filter((c)=>
    c.nombre.toLowerCase().includes(busqueda.toLowerCase())
),
})).filter((s)=>s.data.length>0);


  return (
    /* pantalla de búsqueda de contactos con sectionList */
    <View style={styles.pantalla}>
      <TextInput
      style={styles.input}
      placeholder="buscar contacto"
      value={busqueda}
      onChangeText={setBusqueda}
      />
      {/* lista de secciones */}
      <SectionList
        sections={secciones}
        keyExtractor={(item) => item.id}
        extraData={favoritos}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => alternarfavorito(item.id)}
            style={styles.item}>
              {/* muestra el estado del favorito */}
            <Text>
              {favoritos.includes(item.id) ? '⭐' : '☆'}
              {item.nombre} . {item.telefono}
              </Text>
          </Pressable>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.seccion}>{section.nombre}</Text>
        )}
        renderSectionFooter={({ section }) => (
          <Text style={styles.pie}>fin de la sección</Text>
        )}
        ItemSeparatorComponent={Separador}
        SectionSeparatorComponent={() => <View style={{ height: 8 }} />}
        stickySectionHeadersEnabled
        ListEmptyComponent={<Text style={styles.vacio}>sin resultados</Text> }
        />
    </View>
  );
}

/* app */
export default function Flatscreen() {
const [pantalla, setPantalla]=useState('tareas');
return (
  <View style={styles.contenedor}>
    <View style={styles}>
      <Button title='Flatlist' onPress={()=>setPantalla('tareas')}/>
      <Button title='Sectionlist' onPress={()=>setPantalla('contactos')}/>
    </View>
    {pantalla==='tareas' ? <PantallaTareas/> : <PantallaContactos/>}
    </View>
);
}

/* zona esteticos */

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#7d7d7d',
    paddingTop: 50,
    paddingHorizontal: 16,
    
  },
  pantalla: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    padding: 8,
    marginTop: 8,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
  encabezado: {
    backgroundColor: '#e0e0e0',
    padding: 8,
    fontSize: 18,
    fontWeight: 'bold'},
  
  item: {
    padding: 14,
  },
  seleccionado: {
    backgroundColor: '#d0e0ff',
  },
  separador: {
    height: 1,
    backgroundColor: '#827e7e',
  },
  pie: {
    padding: 8,
    color: '#66666666',
  },
  vacio: {
    padding: 16,
    textAlign: 'center',
  },




});