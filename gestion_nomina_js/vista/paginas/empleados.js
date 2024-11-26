import { BottonMas } from "../components/modal/BottonMas.js"
import { ModalAñadirEmpleado } from "../components/modalAñadirEmpleados/ModalAñadirEmpleado.js"
import { TableEmpleados } from "../components/tableEmpleados/TableEmpleados.js"

export default function Empleados() {
  const $mian = document.createElement('main')
  const $section = document.createElement('section')
  $section.classList.add('nomina-table-section')
  $section.append(TableEmpleados())
  $mian.append(ModalAñadirEmpleado())
  $mian.append($section)
  $mian.append(BottonMas({title: 'Agregar empleado'}))
  return $mian
}