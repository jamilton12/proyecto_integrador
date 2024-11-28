import { calcularDiferencia, calcularNomina } from '../../modelo/marcar/calcualarNomina.js'
import { registros } from '../../modelo/nomina/registros.js'

const listaRegistros = registros()

export function traerRegistros() {
  const diferencias = listaRegistros.map(registro => calcularDiferencia(registro))
  const {nomina, totalHoras, netoNomina, descuentoSalud, descuentoPension, diasTrabajados } = calcularNomina()

  return { nomina, totalHoras, netoNomina, descuentoSalud, descuentoPension,diasTrabajados, registros: listaRegistros, diferencias }
}

export function lastRegistro() {
  const registro = listaRegistros[listaRegistros.length - 1] || null
  return registro
}