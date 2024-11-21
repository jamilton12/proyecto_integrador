import { Modal } from "../modal/Modal.js"

export const ModalAñadirEmpleado = () => {
  const $tite = document.createElement('h1')
  $tite.innerText = 'Añadir Empleados'
  const $modal =  Modal({children: [$tite]})

  return $modal
}