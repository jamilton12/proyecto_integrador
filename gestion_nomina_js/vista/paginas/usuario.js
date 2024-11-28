import { SectionUsuario } from "../components/sectionUsuario/SectionUsuario.js"

export default function Usuario() {
  const $mian = document.createElement('main')
  const $sectionMain = document.createElement('section')
  $sectionMain.classList.add('usuario-main')

  $sectionMain.innerHTML = `
  <nav class="usuario-menu">
    <ul>
      <li class="usuario-menu-option active">
        Información Personal
      </li>
      <li class="usuario-menu-option">
        Información Familiar
      </li>
      <li class="usuario-menu-option">
        Información de Nomina
      </li>
    </ul>
  </nav>
  `
  $sectionMain.append(SectionUsuario())
  $mian.append($sectionMain)
  return $mian
}