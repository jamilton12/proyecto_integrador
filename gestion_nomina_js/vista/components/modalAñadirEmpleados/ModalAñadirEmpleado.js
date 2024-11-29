import { Modal } from "../modal/Modal.js"
import { SectionAñadirEmpleados } from "./SectionAñadir.js"

export const ModalAñadirEmpleado = () => {
  const $tite = document.createElement('h1')
  $tite.innerText = 'Añadir Empleados'
  const $section = SectionAñadirEmpleados()

  const $modal =  Modal({children: [$tite, $section]})

  return $modal
}