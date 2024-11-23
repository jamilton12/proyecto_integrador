import Empleados from "../../modelo/mocks/Empleados.JSON" with { type: "json" }

let listaEmpleados = JSON.parse(localStorage.getItem('empleados')) || []

if (!listaEmpleados.includes(Empleados)) {
  listaEmpleados = listaEmpleados.concat(Empleados)
}


export function traerEmpleadoActual(USER) {
  const empleadoActual = listaEmpleados.find(empleado => { return empleado = empleado.cedula_Emple === USER.cedula_Emple})
  return empleadoActual
}

export function traerEmpleados() {
  return listaEmpleados
}