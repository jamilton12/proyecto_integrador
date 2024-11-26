import { ShemaForm, shemaFormFamiliar, shemaFormContrato } from "./formShemasAñadirEmpleados.js"
import { Input } from "../input/Input.js"
import { añadirEmpleado } from "../../../controllador/usuario/añadirEmpleado.js"
import { TitleSection } from "../titleSection/TitleSection.js"
export const SectionAñadirEmpleados = () => {
  const $section = document.createElement('section')
  $section.classList.add('modal-añadir-empleado-section')
  const $form = document.createElement('form')
  $form.classList.add('modal-añadir-empleado-form')
  $form.action = 'addEmpleado'
  $form.name = 'addEmpleado'
  $form.method = 'post'

  const $titleEmpleado = TitleSection({children: 'Información Del Empleado'})
  $form.append($titleEmpleado)

  ShemaForm.map((input) =>{
      const $input = Input({
        type: input.type,
        name: input.name,
        label: input.placeholder,
        options: input.options
      })
      $form.append($input)
    }) 

  const $titleFamiliar = TitleSection({children: 'Información Familiar'})
  $form.append($titleFamiliar)
  shemaFormFamiliar.map((input) =>{
    const $input = Input({
      type: input.type,
      name: input.name,
      label: input.placeholder,
      options: input.options
    })
    $form.append($input)
  }) 
  const $titleContrato = TitleSection({children: 'Información de Contrato'})
  $form.append($titleContrato)

  shemaFormContrato.map((input) =>{
    const $input = Input({
      type: input.type,
      name: input.name,
      label: input.placeholder,
      options: input.options
    })
    $form.append($input)
  }) 

  const div = document.createElement('div')

  const $button = document.createElement('button')
  $button.type = 'submit'
  $button.innerText = 'Agregar Empleado'
  
  div.append($button)
  div.classList.add('modal-añadir-empleado-button')
  $form.append(div)
  $section.append($form)
  submitForm($form)
  return $section
}

function submitForm($form) {
  $form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData($form)
    const data = Object.fromEntries(formData)
    console.log(data)
    añadirEmpleado(data)
  })
}
