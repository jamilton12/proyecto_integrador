import { BottonMas } from "../components/modal/BottonMas.js"
import { ModalAñadirEmpleado } from "../components/modalAñadirEmpleados/ModalAñadirEmpleado.js"
import { TableEmpleados } from "../components/tableEmpleados/TableEmpleados.js"

export default function Empleados() {
  const $mian = document.createElement('main')
  $mian.append(ModalAñadirEmpleado())
  $mian.append(TableEmpleados())
  $mian.append(BottonMas({title: 'Agregar empleado'}))
  return $mian
}