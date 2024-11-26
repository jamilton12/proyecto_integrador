import { nomina } from "../../modelo/nomina/nomina.js"
import { nuevaNomina } from "../../modelo/nomina/nuevaNomina.js"
export function traerNomina() {
  let listaNomina = nomina()
  
  return listaNomina
}
export function actualizarNomina(valor_Nomina, descuentoSalud, descuentoPension) {
  let fecha = new Date()
  let fechaActual = fecha.toLocaleDateString('es-CO', { year: 'numeric', month: 'short', day: 'numeric' })

  let listaNomina = traerNomina()
  let lastNomina = listaNomina[listaNomina.length - 1]

  if (lastNomina.esta_Activa === true && lastNomina.fecha_fin === fechaActual) {
    lastNomina.esta_Activa = false
    lastNomina.descuentoPension = descuentoPension
    lastNomina.descuentoSalud = descuentoSalud
    lastNomina.valor_Nomina = valor_Nomina
    listaNomina[listaNomina.length - 1] = lastNomina
    localStorage.setItem('nomina', JSON.stringify(listaNomina))
    nuevaNomina()
  }else {
    return
  }
}