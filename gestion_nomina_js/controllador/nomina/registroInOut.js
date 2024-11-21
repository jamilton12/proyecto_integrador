import { lastRegistro } from "./Nomina.js"

const user = JSON.parse(localStorage.getItem('login_success'))
const fecha = new Date()
let fechaActual = fecha.toLocaleDateString('es-CO', {year:'numeric', month:'short', day:'numeric'} )
let horaActual = fecha.toLocaleTimeString('es-CO', {hour:'numeric', minute:'numeric', second:'numeric', hour12: false})

export function marcarIngreso() {
  let registros = JSON.parse(localStorage.getItem('registros')) || []

  registros.push({
    documento_Usuario: user.cedula_Emple,
    esta_Activa: true,
    registro: {
      fecha_ingreso: fechaActual,
      hora_ingreso: horaActual,
      fecha_salida: "",
      hora_salida: ""
    }
  })

  localStorage.setItem('registros', JSON.stringify(registros))
}

export function marcarSalida() {
  console.log('salida');
  
  let registros = JSON.parse(localStorage.getItem('registros'))
  const registroActual = lastRegistro()
  console.log(registroActual);

  registros.map((registro, index) => {
    registros[index].registro.fecha_salida = fechaActual
    registros[index].registro.hora_salida = horaActual
    registros[index].esta_Activa = false
  })

  localStorage.setItem('registros', JSON.stringify(registros))
}

export function recetRegistros() {
  localStorage.removeItem('registros')
}