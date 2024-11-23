export const ShemaForm = [
  {
    name: 'cedula_Emple',
    placeholder: 'Cedula del Empleado',
    type : 'text'
  }, 
  {
    name: 'nombre_Emple',
    placeholder: 'Nombre del Empleado',
    type : 'text'
  },
  {
    name: 'apellido_Emple',
    placeholder: 'Apellido del Empleado',
    type : 'text'
  },
  { 
    name: 'cargo_Emple',
    placeholder: 'Cargo del Empleado',
    type : 'text'
  },
  {
    name: 'fechaNacimiento_Emple',
    placeholder : 'Fecha de Nacimiento del Empleado',
    type : 'date'
  },
  {
    name: 'sexo_Emple',
    placeholder: 'Genero del Empleado',
    type : 'radio',
    options : ['Masculino', 'Femenino']
  },
  {
    name: 'pais_Emple',
    placeholder : 'Pais del Empleado',
    type : 'select',  
    options : ['Colombia', 'Ecuador', 'Peru', 'Venezuela', 'Argentina', 'Brasil', 'Chile', 'Uruguay']
  },
  {
    name: 'ciudad_Emple',
    placeholder: 'Ciudad del Empleado',
    type : 'select',
    options : ['Medellin', 'Bello', 'Cali', 'Bogota', 'Cucuta', 'Cartagena', 'Manizales']
    
  },
  {
    name: 'departamento_Emple',
    placeholder: 'Departamento del Empleado',
    type : 'select',  
    options : ['Antioquia', 'Cundinamarca', 'Valle del Cauca', 'Bogota', 'Cesar', 'Caldas', 'Santander']
  },
  {
    name: 'municipio_Emple',
    placeholder: 'Municipio del Empleado',
    type : 'select',
    options : ['Medellin', 'Bello', 'Cali', 'Bogota', 'Cucuta', 'Cartagena', 'Manizales']
  },
  { 
    name: 'direccion_Emple',
    placeholder: 'Direccion del Empleado',
    type : 'text'
  },
  {
    name: 'telefono_Emple',
    placeholder: 'Telefono del Empleado',
    type : 'text'
  },
  {
    name: 'email_Emple',
    placeholder: 'Email del Empleado',
    type : 'email'
  },
  { 
    name: 'clave',
    placeholder: 'Contraseña del Empleado',
    type : 'password'
  },
  {
    name: 'rol',  
    placeholder: 'Rol del Empleado',
    type : 'select',
    options : ['admin', 'jefe', 'empleado']
  }
]

export const shemaFormFamiliar = [
  {
    name : 'documento_Familiar',
    placeholder: 'Documento del Familiar',
    type : 'text'
  },
  {
    name: 'parentesco',
    placeholder: 'Parentesco del Familiar',
    type : 'text',
  },
  {
    name: 'nombre_Familiar', 
    placeholder: 'Nombre del Familiar',
    type : 'text'
  },
  {
    name: 'apellidos_Familiar',
    placeholder: 'Apellidos del Familiar',
    type : 'text'
  },
  {
    name: 'telefono_Familiar',
    placeholder: 'Telefono del Familiar',
    type : 'text'
  },
  {
    name: 'email_Familiar',
    placeholder: 'Email del Familiar',
    type : 'email'
  },
]

export const shemaFormContrato = [
  {
    name: 'numero_Contrato',
    placeholder: 'Numero del Contrato',
    type : 'text'
  },
  {
    name: 'tipo_Contrato',
    placeholder: 'Tipo del Contrato',
    type : 'text'
  },
  {
    name: 'pago_Hora',
    placeholder: 'Pago por Hora',
    type : 'text'
  },
  {
    name: 'fecha_Inicio',
    placeholder: 'Fecha de Inicio de Contrato',
    type : 'date'
  },
  {
    name: 'fecha_Fin',
    placeholder : 'Fecha de Fin de Contrato',
    type : 'date'
  },
]
