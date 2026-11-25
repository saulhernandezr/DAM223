from flask import Blueprint

controladorAlumnoBP= Blueprint('controladorAlumno',__name__)

""" ruta para arranque del servidor """
@controladorAlumnoBP.route('/')
def inicio():
    return "hola soy el backend de alumno"

""" ruta para insert """
@controladorAlumnoBP.route('/guardarAlumno' , methods=['POST'])
def guardar():
    return 'se guardo el alumno'

""" ruta consultar todo """
@controladorAlumnoBP.route('/consultaTodo')
def consultatodo():
    return 'se consultaron todos los alumnos'

""" ruta para actualizar """
@controladorAlumnoBP.route('/actualizarAlumno', methods=['PUT'])
def actualizar():
    return 'se actualizo el alumno'

""" ruta para eliminar """
@controladorAlumnoBP.route('/eliminarAlumno', methods=['DELETE'])
def eliminar():
    return 'se borro el alumno'

