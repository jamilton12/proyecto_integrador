import { TableEmpleados } from "../components/tableEmpleados/TableEmpleados.js"

export default function Empleados() {
  const $mian = document.createElement('main')
  $mian.append(TableEmpleados())
  
  return $mian
}