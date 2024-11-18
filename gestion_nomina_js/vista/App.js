import { iniciarSesion } from "../controllador/iniciarSesion.js"
import { LOCATION, PATH } from "../utils/const.js"
import { Header } from "./components/Header.js"
import { navigateTo, routes } from "./roustes/Router.js"
export function App() {
  const USER = JSON.parse(localStorage.getItem('login_success'))
  const $app = document.querySelector('#root')
  window.onpopstate = () => {
    navigateTo(window.location.pathname, $app, USER);
  };

  const defaultRoute = USER ? PATH.INICIO : PATH.INICIO_SESION
  
  navigateTo(defaultRoute, $app, USER);
  if (!USER) {
    iniciarSesion()
  }
}

