import { nomina } from "../../modelo/nomina/nomina.js"

export function traerNomina() {
  let listaNomina = nomina()
  
  return listaNomina
}
