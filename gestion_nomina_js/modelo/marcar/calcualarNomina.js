import { traerContratos } from "../../controllador/contrato/contrato.js"
import { registros } from "../nomina/Registros.js"
import { actualizarNomina } from "../../controllador/nomina/nomina.js"
export function calcularDiferencia(registroActual) {
  let {registro : {fecha_ingreso, hora_ingreso, fecha_salida, hora_salida}} = registroActual
  
  if (fecha_ingreso === fecha_salida) {
    return (parseInt(hora_salida) -parseInt(hora_ingreso) )
  }else {
    return (24 - parseInt(hora_ingreso) + parseInt(hora_salida))
  }
}

function calcularDiasTrabajados(horasTrabajadas) {
  let diasTrabajados = Math.floor(horasTrabajadas / 8)

  return diasTrabajados
}


function calcularTotalHoras(registros) {
  let totalHoras = 0

  registros.map(registro => {
    totalHoras += calcularDiferencia(registro)
  })
  
  return totalHoras
}

export function calcularNomina() {
  const contrato = traerContratos() 
  const pago  = contrato[contrato.length - 1].pago_Hora

  let listaRegistros = registros()

  let totalHoras = calcularTotalHoras(listaRegistros)
  let netoNomina = totalHoras * pago
  let diasTrabajados = calcularDiasTrabajados(totalHoras)
  let descuentoSalud = (netoNomina * 4)/100
  let descuentoPension = (netoNomina * 4)/100
  let nomina = netoNomina - descuentoSalud - descuentoPension

  actualizarNomina(nomina, descuentoSalud, descuentoPension)
  return {nomina, totalHoras, netoNomina, descuentoSalud, descuentoPension, diasTrabajados}
}