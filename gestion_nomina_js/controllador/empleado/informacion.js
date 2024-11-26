import Empleados from "../../modelo/mocks/Empleados.JSON" with { type: "json" }

let listaEmpleados = JSON.parse(localStorage.getItem('empleados')) || []

let allEmpleados = [...Empleados, ...listaEmpleados,]

export function traerEmpleadoActual(USER) {
  const empleadoActual = allEmpleados.find(empleado => { return empleado = empleado.cedula_Emple === USER.cedula_Emple})
  return empleadoActual
}

export function traerEmpleados() {
  return allEmpleados
}