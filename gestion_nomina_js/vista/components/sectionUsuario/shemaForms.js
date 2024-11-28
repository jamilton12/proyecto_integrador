import { traerContratos } from "../../../controllador/contrato/contrato.js"
import { traerEmpleadoActual } from "../../../controllador/empleado/informacion.js"
import { traerFamiliares } from "../../../controllador/familiar/familiar.js"
let user = JSON.parse(localStorage.getItem('login_success'))

let empleado = traerEmpleadoActual(user)
let contrato = traerContratos()
let familiares = traerFamiliares()
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

export const shemaFormInfoFamiliar = [
  {
    name : 'documento_Familiar',
    placeholder: 'Documento del Familiar',
    type : 'text',
    value : familiares[0].documento_Familiar
  },
  {
    name: 'parentesco',
    placeholder: 'Parentesco del Familiar',
    type : 'text',
    value : familiares[0].parentesco
  },
  {
    name: 'nombre_Familiar', 
    placeholder: 'Nombre del Familiar',
    type : 'text',
    value : familiares[0].nombre_Familiar
  },
  {
    name: 'apellidos_Familiar',
    placeholder: 'Apellidos del Familiar',
    type : 'text',
    value : familiares[0].apellidos_Familiar
  },
  {
    name: 'telefono_Familiar',
    placeholder: 'Telefono del Familiar',
    type : 'text',
    value : familiares[0].telefono_Familiar
  },
  {
    name: 'email_Familiar',
    placeholder: 'Email del Familiar',
    type : 'email',
    value : familiares[0].email_Familiar
  },
]

export const shemaFormInfoContrato = [
  {
    name: 'numero_Contrato',
    placeholder: 'Numero del Contrato',
    type : 'text',
    value : contrato[0].numero_Contrato
  },
  {
    name: 'tipo_Contrato',
    placeholder: 'Tipo del Contrato',
    type : 'select',
    options : ['Obra labor', 'Termino indefinido', 'Termino fijo', 'Prestacion de servicios'],
    value : contrato[0].tipo_Contrato
  },
  {
    name: 'pago_Hora',
    placeholder: 'Pago por Hora',
    type : 'text',
    value : contrato[0].pago_Hora
  },
  {
    name : 'Eps',
    placeholder: 'EPS',
    type: 'select',
    options: ['SURA', 'Nueva EPS', 'Sabia Salud'],
    value : contrato[0].Eps
  },
  {
    name: 'caja_comp',
    placeholder: 'Caja de compensacion',
    type : 'select',
    options :['colpenciones', 'porvenir', 'Cofenalco', 'Comfama'],
    value : contrato[0].caja_comp
  },
  {
    name: 'fecha_Inicio',
    placeholder: 'Fecha de Inicio de Contrato',
    type : 'text',  
    value : contrato[0].fecha_Inicio
  },
  {
    name: 'fecha_Fin',
    placeholder : 'Fecha de Fin de Contrato',
    type : 'text',
    value : contrato[0].fecha_Fin
  },
]
