import { iniciarSesion } from "../controllador/iniciarSesion.js"
import { LOCATION, PATH } from "../utils/const.js"
import { cambiarBotonHeader } from "../utils/Marcar.js"
import { cerrarSesion, Header, headerModalMenu, headerModalUsusario } from "./components/Header.js"
import { Router } from "./roustes/Router.js"
export function App() {
  const USER = JSON.parse(localStorage.getItem('login_success'))
  const $app = document.querySelector('#root')

  if (!USER) {
    LOCATION.hash = PATH.INICIO_SESION
  } else if (USER && LOCATION.hash === PATH.INICIO_SESION) {
    LOCATION.hash = PATH.INICIO
  }

  Router()

  if (LOCATION.hash === PATH.INICIO_SESION) {
    iniciarSesion()

  }
  // forzarCierre()
  // headerModalMenu()
  // headerModalUsusario()
  // cerrarSesion()
  // cambiarBotonHeader()
}

function forzarCierre() {
  localStorage.removeItem('login_success')
  LOCATION.hash = PATH.INICIO_SESION
}