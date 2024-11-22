import { addEmpleado } from "../../modelo/usuario/añadirEmpleado.js"

export function añadirEmpleado({
  cedula_Emple,
  nombre_Emple,
  apellido_Emple,
  cargo_Emple,
  fechaNacimiento_Emple,
  sexo_Emple,
  pais_Emple,
  ciudad_Emple,
  departamento_Emple,
  municipio_Emple,
  direccion_Emple,
  telefono_Emple,
  email_Emple,
  documento_Familiar,
  parentesco,
  nombre_Familiar,
  apellidos_Familiar,
  telefono_Familiar,
  email_Familiar,
  numero_Contrato,
  tipo_Contrato,
  pago_Hora,
  fecha_Inicio,
  fecha_Fin,
  clave,
  rol}) {
  let empleado =   {
    cedula_Emple,
    nombre_Emple,
    apellido_Emple,
    UrlFoto_Emple: '/gestion_nomina_js/vista/assets/foto_ususario.jpg',
    cargo_Emple,
    fechaNacimiento_Emple,
    sexo_Emple,
    pais_Emple,
    ciudad_Emple,
    departamento_Emple,
    municipio_Emple,
    direccion_Emple,
    telefono_Emple,
    email_Emple,
    estado_Emple : true,
    numero_Contrato
  }
  let familia =   {
    cedula_Emple, 
    documento_Familiar,
    parentesco,
    nombre_Familiar,
    apellidos_Familiar,
    telefono_Familiar,
    email_Familiar 
  }

  let contrato =   {
    numero_Contrato,
    tipo_Contrato,
    pago_Hora,
    fecha_Inicio,
    fecha_Fin,
    activo : true
  }

  let usuario =   {
    cedula_Emple,
    clave,
    rol,
    estado: false
  }
  addEmpleado(empleado, familia, contrato, usuario)
}