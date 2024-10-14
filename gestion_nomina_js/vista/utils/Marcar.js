import { LOCATION, MARCAR } from "./const.js";
//TODO poner variables en el local storage 
//TODO o buscar manera que no se reincien con cambiar de pagina
export function marcarIngreso(on, primeraMarca) {

  if (LOCATION.pathname === MARCAR) {  
    let $btonMarcar = document.querySelector('.marcar-button')
    $btonMarcar.innerText = 'Marcar Ingreso'

    $btonMarcar.addEventListener('click', () => {  
      if (on) {
        primeraMarca = true
        cambiarHeader(on,primeraMarca)
        $btonMarcar.innerText = 'Marcar Salida'
        on = false
      }else {
        $btonMarcar.innerText = 'Marcar Ingreso'
          cambiarHeader(on, primeraMarca)
        on = true
      }
      
    })
  }
}

export function cambiarHeader(on, primeraMarca) {
  let $headerbtonMarcar = document.querySelector('#header-button-marcar')
  if (on && primeraMarca) {
    $headerbtonMarcar.innerText = 'Marcar Salida'
  } else {
    $headerbtonMarcar.innerText = 'Marcar Ingreso'
  }
}