import { PATH } from "../../utils/const.js";
import  Marcar  from "../paginas/marcar.js";
import  Nomina  from "../paginas/nomina.js";
import  Empleados  from "../paginas/empleados.js";
import  IniciarSesion  from "../paginas/iniciarSesion.js";
import  Usuario  from "../paginas/usuario.js";
import  Inicio  from "../paginas/inicio.js";
export const routes = [
  {
    path: PATH.INICIO,
    component: Inicio,
    title: 'Inicio'
  },
  {
    path: PATH.MARCAR,
    component: Marcar,
    title: 'Marcar'
  },
  {
    path: PATH.NOMINA,
    component: Nomina,
    title: 'Nomina'
  },
  {
    path: PATH.EMPLEADOS,
    component: Empleados,
    title: 'Empleados'
  },
  {
    path: PATH.INICIO_SESION,
    component: IniciarSesion,
    title: 'Iniciar Sesion'
  },
  {
    path: PATH.USUARIO,
    component: Usuario
  },
  {
    path: PATH.ERROR,
    component: IniciarSesion,
    title: 'Error 404'
  }
]