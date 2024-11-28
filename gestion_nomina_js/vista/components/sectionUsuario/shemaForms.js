import { traerEmpleadoActual } from "../../../controllador/empleado/informacion.js"
let user = JSON.parse(localStorage.getItem('login_success'))

let empleado = traerEmpleadoActual(user)

export const ShemaFormInformacion = [
  {
    name: 'cedula_Emple',
    placeholder: 'Cedula del Empleado',
    type : 'text',
    value : empleado.cedula_Emple
  }, 
  {
    name: 'nombre_Emple',
    placeholder: 'Nombre del Empleado',
    type : 'text',
    value : empleado.nombre_Emple
  },
  {
    name: 'apellido_Emple',
    placeholder: 'Apellido del Empleado',
    type : 'text',
    value : empleado.apellido_Emple
  },
  { 
    name: 'cargo_Emple',
    placeholder: 'Cargo del Empleado',
    type : 'text',
    value : empleado.cargo_Emple
  },
  {
    name: 'fechaNacimiento_Emple',
    placeholder : 'Fecha de Nacimiento del Empleado',
    type : 'text',
    value : empleado.fechaNacimiento_Emple
  },
  {
    name: 'sexo_Emple',
    placeholder: 'Genero del Empleado',
    type : 'radio',
    options : ['Masculino', 'Femenino'],
    value : empleado.sexo_Emple
  },
  {
    name: 'pais_Emple',
    placeholder : 'Pais del Empleado',
    type : 'select',  
    options : ['Colombia', 'Ecuador', 'Peru', 'Venezuela', 'Argentina', 'Brasil', 'Chile', 'Uruguay'],
    value : empleado.pais_Emple
  },
  {
    name: 'ciudad_Emple',
    placeholder: 'Ciudad del Empleado',
    type : 'select',
    options : ['Medellin', 'Bello', 'Cali', 'Bogota', 'Cucuta', 'Cartagena', 'Manizales'],
    value : empleado.ciudad_Emple
  },
  {
    name: 'departamento_Emple',
    placeholder: 'Departamento del Empleado',
    type : 'select',  
    options : ['Antioquia', 'Cundinamarca', 'Valle del Cauca', 'Bogota', 'Cesar', 'Caldas', 'Santander'],
    value : empleado.departamento_Emple
  },
  {
    name: 'municipio_Emple',
    placeholder: 'Municipio del Empleado',
    type : 'select',
    options : ['Medellin', 'Bello', 'Cali', 'Bogota', 'Cucuta', 'Cartagena', 'Manizales'],
    value : empleado.municipio_Emple
  },
  { 
    name: 'direccion_Emple',
    placeholder: 'Direccion del Empleado',
    type : 'text',
    value : empleado.direccion_Emple
  },
  {
    name: 'telefono_Emple',
    placeholder: 'Telefono del Empleado',
    type : 'text',
    value : empleado.telefono_Emple
  },
  {
    name: 'email_Emple',
    placeholder: 'Email del Empleado',
    type : 'email',
    value : empleado.email_Emple
  },
]