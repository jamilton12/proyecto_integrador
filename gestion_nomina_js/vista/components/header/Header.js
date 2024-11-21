import { traerEmpleadoActual } from "../../../controllador/empleado/informacion.js";
import { LOCATION, PATH } from "../../../utils/const.js";
import { SectionLeft } from "./SectionLeft.js";
import { SectionModal } from "./SectionModal.js";
import { SectionRight } from "./SectionRight.js";
import { logaut } from "../../../controllador/usuario/iniciarSesion.js";

export function Header() {
  const user = JSON.parse(localStorage.getItem('login_success')) ?? {}
  const { rol = 'admin' } = user
  const {nombre_Emple, UrlFoto_Emple} = traerEmpleadoActual(user)

  const $header = document.createElement('header')
  $header.classList.add('header')

  const $sectionLeft = SectionLeft({ rol })
  const $sectionModal = SectionModal({ rol })
  const $sectionRight = SectionRight({ nombre: nombre_Emple, url: PATH.USUARIO, image: UrlFoto_Emple })

  $header.append($sectionModal)
  $header.append($sectionLeft)
  $header.append($sectionRight)

    headerModalMenu($header)
    headerModalUsusario($header)
    cerrarSesion($header)

  return $header
}

export function headerModalMenu(header) {
  let $headerBtonModal = header.querySelector('.header-modal-button')
  let $headerModal = header.querySelector('.header-modal-container-menu')
  let $closeModal = header.querySelector('.header-modal-container-menu i')


  $headerBtonModal.addEventListener('click', () => {
    $headerModal.classList.toggle('modal-active');
  });
  $closeModal.addEventListener('click', () => {
    $headerModal.classList.toggle('modal-active');
  });
}

export function headerModalUsusario(header) {
  let $modalUsuario = header.querySelector('.header-usuario-menu')
  let $modalUsuariobton = header.querySelector('.header-usuario-icon') ?? null
  if ($modalUsuariobton === null) return

  let on = false
  $modalUsuariobton.addEventListener('click', () => {
    if (on) {
      $modalUsuario.classList.remove('active');
      $modalUsuariobton.innerHTML = '<i class="fi fi-rr-angle-small-down"></i>';
      on = false;
    } else {
      $modalUsuario.classList.add('active');
      $modalUsuariobton.innerHTML = '<i class="fi fi-rr-angle-small-up"></i>';
      on = true
    }
  })
}

export function cerrarSesion(header) {
  let $cerrarBton = header.querySelector('#cerrar-sesion')
  $cerrarBton.addEventListener('click', () => {
    logaut()
    LOCATION.hash = PATH.INICIO_SESION
  })
}
