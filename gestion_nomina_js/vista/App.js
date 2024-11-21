import { recetRegistros } from "../controllador/nomina/registroInOut.js"
import { iniciarSesion } from "../controllador/usuario/iniciarSesion.js"
import { LOCATION, PATH } from "../utils/const.js"
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
  // recetRegistros()
}

function forzarCierre() {
  localStorage.removeItem('login_success')
  LOCATION.hash = PATH.INICIO_SESION
}