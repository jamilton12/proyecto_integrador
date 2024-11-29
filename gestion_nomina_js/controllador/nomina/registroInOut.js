import { actualizarRegistro, nuevoRegistro } from "../../modelo/nomina/nuevoRegistro.js"
import { lastRegistro } from "./registros.js"

const user = JSON.parse(localStorage.getItem('login_success'))
const fecha = new Date()
let fechaActual = fecha.toLocaleDateString('es-CO', { year: 'numeric', month: 'short', day: 'numeric' })
let horaActual = fecha.toLocaleTimeString('es-CO', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false })

export function marcarIngreso() {
  let registro= {
    documento_Usuario: user.cedula_Emple,
    esta_Activa: true,
    registro: {
      fecha_ingreso: fechaActual,
      hora_ingreso: horaActual,
      fecha_salida: "",
      hora_salida: ""
    }
  }

  nuevoRegistro(registro)
}

export function marcarSalida() {
  const registroActual = lastRegistro()

  if (!registroActual) {
    return
  }

  registroActual.esta_Activa = false
  registroActual.registro.fecha_salida = fechaActual
  registroActual.registro.hora_salida = horaActual

  actualizarRegistro(registroActual)
}

export function recetRegistros() {
  localStorage.removeItem('registros')
}