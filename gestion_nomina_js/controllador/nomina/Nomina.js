import registrosJson from '../../modelo/mocks/registros.JSON' with { type: "json" }
import { calcularDiferencia, calcularNomina } from '../../modelo/marcar/calcualarNomina.js'


let registros = JSON.parse(localStorage.getItem('registros')) || []
registros = registros.concat(registrosJson)

const user = JSON.parse(localStorage.getItem('login_success'))

export function traerNomina() {
  const NewRegistros = registros.filter(registro => registro.documento_Usuario === user.cedula_Emple)
  const diferencias = NewRegistros.map(registro => calcularDiferencia(registro))
  const { nomina, totalHoras } = calcularNomina()

  return { nomina, totalHoras, registros: NewRegistros, diferencias }
}
