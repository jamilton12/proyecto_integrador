import { LOCATION, PATH } from "../../utils/const.js";
import { Header } from "../components/Header.js"
import { Error } from "../paginas/error.js";
import { routes } from "./routes.js";


export function Router() {
  const d = document
  const w = window
  const $app = d.getElementById('root')
  const { hash } = location
  if ($app.children) {
    $app.innerHTML = ''
  }

  const route = routes.find(route => {
    return route.path === hash
  })

  if (!route) {
    $app.append(Error())
    d.title = 'Error 404 Pagina no encontrada'
    return
  }


  if (hash !== PATH.INICIO_SESION) {
    $app.append(Header())
  }
  $app.append(route.component())
  d.title = route.title


}