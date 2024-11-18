import { LOCATION, PATH } from "../../utils/const.js";
import { Inicio } from "../paginas/inicio.js";
import { Marcar } from "../paginas/marcar.js";
import { Nomina } from "../paginas/nomina.js";
import { Empleados } from "../paginas/empleados.js";
import { IniciarSesion } from "../paginas/iniciarSesion.js";
import { Usuario } from "../paginas/usuario.js";
import { Header } from "../components/Header.js"


export const routes = [
  {
    path: PATH.INICIO,
    component: Inicio
  },
  {
    path: PATH.MARCAR,
    component: Marcar
  },
  {
    path: PATH.NOMINA,
    component: Nomina
  },
  {
    path: PATH.EMPLEADOS,
    component: Empleados
  },
  {
    path: PATH.INICIO_SESION,
    component: IniciarSesion
  },
  {
    path: PATH.USUARIO,
    component: Usuario
  },
  {
    path: PATH.INDEX,
    component: Inicio
  }
]

export function navigateTo(hash, $app, USER) {
  const route = routes.find(route => route.path === hash)
  if (route === LOCATION.origin) {
    return
  }

  
  if (route && route.component) {
    window.history.pushState({}, route.path, LOCATION.origin + route.path)  
    if ($app.firstChild) {
      $app.removeChild($app.firstChild)
    }
    if (USER) {
      $app.append(Header())
      console.log(USER);
    }
    $app.append(route.component())
  }else {
    navigateTo(PATH.INDEX, $app, USER)
  }
  return $app
}