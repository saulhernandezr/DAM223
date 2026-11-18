/* zona de importaciones */
import { StyleSheet, Text, View, Button, Modal, Touchable, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const opciones = ['compartir', 'Editar', 'Eliminar'];


/* zona de componentes o screens*/
export default function Modalscreen() {
  const [modal, setModal] = useState(null);
  const [mensaje, setMensaje]=useState('seleccione una opcion');
  const elegirOpcion = (opcion)=>{
    setMensaje(`Opcion: ${opcion}`);
    setModal(null);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>practica modal y buttonsheet</Text>
      <Text style={styles.statusbar}>estado actual: </Text>
      <View style={styles.buttons}>
        <Button
        title="Abrir modal"
        onPress={()=>setModal('confirmacion')}
        color={"#1e88e5"}
        />
        <Button
        title='opciones de perfil'
        onPress={()=>setModal('opciones')}
        color={"rgba(23, 255, 50, 0.33)"}
        />
      </View>

      <Modal
      visible={modal==='confirmacion'}
      animationType='fade'
      transparent
      onRequestClose={()=>setModal(null)}
      >

      <View style={styles.modalOverlay}>
      <View style={styles.modalCard}>
      <Text style={styles.title}>eliminar elemento</Text>
      <Text style={styles.modalBody}> esta accion no se puede hacer</Text>

      <View style={styles.modalActions}>

        <Button title='cancelar' 
        onPress={()=>setModal(null) }
        color='#757575'
         />

        <Button title='aceptar'
        onPress={()=>{setMensaje('elemento eliminado'), setModal(null)}}
        color='#d32f2f'
        />

      </View>
      </View>
      </View>
      </Modal>
      <Modal
      visible={modal==='opciones'}
      animationType='slide'
      transparent
      onRequestClose={()=>setModal(null)}>


      
      <TouchableOpacity
      style={styles.sheetOverlay}
      activeOpacity={1}
      onPress={()=>setModal(null)}>

      <View style={styles.sheet}>
      <View style={styles.sheetHandle} />
      <Text style={styles.sheetTitle}>opciones de perfil</Text>
      {opciones.map((opcion)=>(
          <TouchableOpacity
          key={opcion}
          style={styles.sheetOpcion}
          onPress={()=>elegirOpcion(opcion)}

> 
      <Text style={[
        styles.optionText,
        opcion==='eliminar' && styles.deleteText

      ]}>
      {opcion}
      </Text>
      </TouchableOpacity>   
      
      ))}
      </View>
      </TouchableOpacity>
    </Modal>
    </View>
    

  );
}


/* zona esteticos */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  statusText: { fontSize: 14, color: '#666', marginBottom: 30 },
  buttons: { width: '100%', paddingHorizontal: 20, gap: 15 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' },
  modalCard: { width: '80%', backgroundColor: '#fff', borderRadius: 12, padding: 20, elevation: 5 },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  modalBody: { fontSize: 14, color: '#555', marginBottom: 20 },
  modalActions: { flexDirection: 'row', justifyContent: 'flex-end', gap: 10 },
  sheetOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'flex-end' },
  sheet: { backgroundColor: '#fff', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20, minHeight: '35%' },
  sheetHandle: { width: 40, height: 5, backgroundColor: '#ccc', borderRadius: 3, alignSelf: 'center', marginBottom: 15 },
  sheetTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 15 },
  sheetOption: { paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  optionText: { fontSize: 16 },
  deleteText: { color: '#d32f2f' },
});