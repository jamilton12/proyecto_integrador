import { TitleSection } from "../titleSection/TitleSection.js"
import { ShemaFormInformacion } from "./shemaForms.js"
import { Input } from "../input/Input.js"

export const SectionUsuario = () => {
  const $section = document.createElement('form')
  $section.classList.add('usuario-informacion')


  const $sectionInformacionPersonal = document.createElement('section')
  $sectionInformacionPersonal.classList.add('usuario-informacion-container')

  const titleInformacion = TitleSection({children: 'Información Personal'})
  $section.append(titleInformacion)

  const $img = document.createElement('img')
  $img.src = '/gestion_nomina_js/vista/assets/foto_ususario.jpg'
  $img.alt = 'Foto del Empleado'
  $sectionInformacionPersonal.append($img)

  ShemaFormInformacion.map((input) => {
    const $input = Input({
      type : input.type,
      placeholder : input.placeholder,
      options : input.options,
      name : input.name,
      id : input.id,
      label : input.placeholder,
      value : input.value,
      className : 'input',
      required : true,
      disabled : true
    })
    $sectionInformacionPersonal.append($input)
  })


  $section.append($sectionInformacionPersonal)

  return $section
}