import { LOCATION, MARCAR } from "./const.js";
import { marcarSalida, marcarIngreso } from "../../modelo/marcar/registroInOut.js";
const user = JSON.parse(localStorage.getItem('login_success'))

export function marcar() {

  if (LOCATION.pathname === MARCAR) {  
    let $btonMarcar = document.querySelector('.marcar-button')
    let on = true

    $btonMarcar.addEventListener('click', () => {  
      if (on) {
        marcarIngreso()
        cambiarHeader()
        $btonMarcar.innerText = 'Marcar Salida'
        on = false
      }else {
        marcarSalida()
        cambiarHeader()
        $btonMarcar.innerText = 'Marcar Ingreso'
        on = true
      }
    })
  }
}

export function cambiarHeader() {
  let $headerbtonMarcar = document.querySelector('#header-button-marcar')
  let registros = JSON.parse(localStorage.getItem('registros')) 

  if (registros === null) {
    return
  }

  let registroActual = registros.length - 1

  let on = registros[registroActual].esta_Activa  

  if (on) {
    $headerbtonMarcar.innerText = 'Marcar Salida'
  } else {
    $headerbtonMarcar.innerText = 'Marcar Ingreso'
  }
}