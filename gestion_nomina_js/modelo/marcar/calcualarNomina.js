import registroJson from "../../modelo/mocks/registros.JSON" with { type: "json" }

export function calcularDiferencia(registroActual) {
  let {registro : {fecha_ingreso, hora_ingreso, fecha_salida, hora_salida}} = registroActual
  
  if (fecha_ingreso === fecha_salida) {
    return (parseInt(hora_salida) -parseInt(hora_ingreso) )
  }else {
    return (24 - parseInt(hora_ingreso) + parseInt(hora_salida))
  }
}


function calcularTotalHoras(registros) {
  let totalHoras = 0

  registros.map(registro => {
    totalHoras += calcularDiferencia(registro)
  })
  
  return totalHoras
}

export function calcularNomina() {
  const user = JSON.parse(localStorage.getItem('login_success'))
  const { cedula, pago } = user

  const registros = JSON.parse(localStorage.getItem('registros')) || registroJson
  if (!(registros.includes(registroJson))) {
    registros.concat(registroJson)
  }

  let registrosUser = registros.filter(registro => registro.documento_Usuario === cedula)

  let totalHoras = calcularTotalHoras(registrosUser)
  let nomina = totalHoras * pago


  
  
  return {nomina, totalHoras}
}