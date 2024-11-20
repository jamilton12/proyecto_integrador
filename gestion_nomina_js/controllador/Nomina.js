import registrosJson from '../modelo/mocks/registros.JSON' with { type: "json" }
import { calcularDiferencia, calcularNomina } from '../modelo/marcar/calcualarNomina.js'


export function traerNomina() {
  let registros = JSON.parse(localStorage.getItem('registros')) || []
  registros = registros.concat(registrosJson)
  const { nomina, totalHoras } = calcularNomina()
  const diferencias = registros.map(registro => calcularDiferencia(registro))

  return {nomina, totalHoras, registros, diferencias}
}