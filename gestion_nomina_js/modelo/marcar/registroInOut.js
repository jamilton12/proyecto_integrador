const user = JSON.parse(localStorage.getItem('login_success'))
const fecha = new Date()
let fechaActual = fecha.toLocaleDateString('es-CO', {year:'numeric', month:'short', day:'numeric'} )
let horaActual = fecha.toLocaleTimeString('es-CO')

export function marcarIngreso() {
  let registros = JSON.parse(localStorage.getItem('registros')) || []

  registros.push({
    documento_Usuario: user.cedula,
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
  let registros = JSON.parse(localStorage.getItem('registros')) || []
  let registroActual = registros.length - 1
  const {registro : {fecha_salida, hora_salida}, esta_Activa} = registros[registroActual]

  fecha_salida = fechaActual
  hora_salida = horaActual
  esta_Activa = false

  localStorage.setItem('registros', JSON.stringify(registros))
}

export function recetRegistros() {
  localStorage.removeItem('registros')
}