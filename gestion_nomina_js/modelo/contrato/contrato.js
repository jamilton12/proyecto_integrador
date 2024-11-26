import  contratoJson  from "../mocks/Contrato.JSON" with { type: "json" }

import { traerEmpleadoActual } from "../../controllador/empleado/informacion.js"

export function contrato () {
  const user = JSON.parse(localStorage.getItem('login_success'))
  const empleado = traerEmpleadoActual(user)
  const contratos = JSON.parse(localStorage.getItem('contratos')) || []
  const allContratos = [...contratoJson, ...contratos,]

  const contratoUser = allContratos.filter(contrato => contrato.numero_Contrato === empleado.numero_Contrato)

  return contratoUser
}