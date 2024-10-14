import { LOCATION, INICIOSESION } from "./const.js";

export function headerModalMenu() {
  let $headerBtonModal = document.querySelector('.header-modal-button')
  let $headerModal = document.querySelector('.header-modal-container-menu')
  let $closeModal = document.querySelector('.header-modal-container-menu i')


  $headerBtonModal.addEventListener('click', () => {
    $headerModal.classList.toggle('modal-active');
  });
  $closeModal.addEventListener('click', () => {
    $headerModal.classList.toggle('modal-active');
  });
}

export function headerModalUsusario() {
  let $modalUsuario = document.querySelector('.header-usuario-menu')
  let $modalUsuariobton = document.querySelector('.header-usuario-icon')

  let on = false;

  $modalUsuariobton.addEventListener('click', () => {
    if (on) {
      $modalUsuario.classList.remove('active');
      $modalUsuariobton.innerHTML = '<i class="fi fi-rr-angle-small-down"></i>';
      on = false;
    } else {
      $modalUsuario.classList.add('active');
      $modalUsuariobton.innerHTML = '<i class="fi fi-rr-angle-small-up"></i>';
      on = true;
    }
  })
}

export function cerrarSesion() {
  let $cerrarBton = document.querySelector('#cerrar-sesion')
  $cerrarBton.addEventListener('click', () => {
    localStorage.removeItem('login_success')
    LOCATION.href = INICIOSESION
  })
}