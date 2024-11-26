import { lastRegistro } from "../../controllador/nomina/registros.js"
import { marcarIngreso, marcarSalida } from "../../controllador/nomina/registroInOut.js"

export default function Marcar() {
  const { esta_Activa } = lastRegistro()
  const islastRegistro = esta_Activa ? 'Salida' : 'Ingreso'
  const $mian = document.createElement('main')

  const $section = document.createElement('section')
  $section.classList.add('marcar-section')
  const $botton = document.createElement('botton')
  $botton.classList.add('marcar-button')
  $botton.onclick = marcar
  $botton.innerText = `Marcar ${islastRegistro}`
  $section.append($botton)
  $mian.append($section)

  return $mian
}

export function marcar() {
  const registroActual = lastRegistro()
  const on = !registroActual.esta_Activa
  console.log(registroActual, on);

  if (on) {
    marcarIngreso()
  } else {
    marcarSalida()
  }
  window.location.reload()
}
