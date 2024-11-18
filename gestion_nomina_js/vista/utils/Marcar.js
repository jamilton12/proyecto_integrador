import { LOCATION, PATH } from "./const.js";
import { marcarSalida, marcarIngreso } from "../../controllador/registroInOut.js";

export function Marcar() {
  marcar()
  if (LOCATION.pathname === PATH.MARCAR) {
    cambiarBotonMarcar()
  }    
}

export function marcar() {
  let $btonMarcar = document.querySelector('.marcar-button')
  if (LOCATION.pathname === PATH.MARCAR) {  
    let registros = JSON.parse(localStorage.getItem('registros'))
    let on =true
    if (registros != null) { 
      let registroActual = registros.length - 1
      on = !registros[registroActual].esta_Activa 
    }

    $btonMarcar.addEventListener('click', () => {  
      if (on) {
        marcarIngreso()
        cambiarBotonHeader()
        cambiarBotonMarcar()
        on = false
      }else {
        marcarSalida()
        cambiarBotonHeader()
        cambiarBotonMarcar()
        on = true
      }
    })
  }
}


export function cambiarBotonHeader() {
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

export function cambiarBotonMarcar() {
  let $btonMarcar = document.querySelector('.marcar-button')

  let registros = JSON.parse(localStorage.getItem('registros')) 
  if (registros === null) {
    return
  }
  let registroActual = registros.length - 1
  let on = registros[registroActual].esta_Activa

  if (on) {
    $btonMarcar.innerText = 'Marcar Salida'
  } else {
    $btonMarcar.innerText = 'Marcar Ingreso'
  }
} 