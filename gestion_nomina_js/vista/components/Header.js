import { LOCATION, PATH } from "../../utils/const.js";
import { cambiarBotonHeader } from "../../utils/Marcar.js";

export function Header() {
  const user = JSON.parse(localStorage.getItem('login_success')) ?? {}
  const { nombre , rol = 'admin' } = user 
  const isAdmin = rol === 'admin' 
  const isJefe = rol === 'jefe'

  let $header = document.createElement('header')
  $header.classList.add('header')

  $header.innerHTML = `
      <section class="header-section-left">
      <a class="header-button ${activeForPath(PATH.INICIO)}" href="${PATH.INICIO}">Inicio</a>
      <a class="header-button ${activeForPath(PATH.MARCAR)}" id="header-button-marcar" href="${PATH.MARCAR}">Marcar Ingreso</a>
      <a class="header-button ${activeForPath(PATH.NOMINA)}" id="ver-empleados" href="${PATH.NOMINA}">Nomina</a>
      ${ isAdmin ?  `<a class="header-button ${activeForPath(PATH.EMPLEADOS)}"href="${PATH.EMPLEADOS}">Empleados</a>` : ''}
      ${ isJefe ?  `<a class="header-button ${activeForPath(PATH.EMPLEADOS)} "href="${PATH.EMPLEADOS}">Empleados</a>` : ''}
    </section>
    
    <section class="header-modal">
      <div class="header-modal-button">
        <i class="fi fi-rr-menu-burger"></i>
      </div>
      <div class="header-modal-container-menu">
        <nav class="header-modal-menu">
          <i class="fi fi-rr-cross"></i>
          <a class="header-button ${activeForPath(PATH.INICIO)}" href="${PATH.INICIO}">Inicio</a>
          <a class="header-button ${activeForPath(PATH.MARCAR)}" id="header-button-marcar" href="${PATH.MARCAR}">Marcar Ingreso</a>
          <a class="header-button ${activeForPath(PATH.NOMINA)}" id="ver-empleados" href="${PATH.NOMINA}">Nomina</a>
          ${ isAdmin ?  `<a class="header-button ${activeForPath(PATH.EMPLEADOS)}"href="${PATH.EMPLEADOS}">Empleados</a>` : ''}
          ${ isJefe ?  `<a class="header-button ${activeForPath(PATH.EMPLEADOS)} "href="${PATH.EMPLEADOS}">Empleados</a>` : ''}
        </nav>
      </div>
    </section>
    <section class="header-section-right">
      <div class="header-usuario-container">
        <a class="header-usuario" href="./Usuario.html">
          <span id ="header-usuario-nombre">${nombre ?? 'Usuario'}</span>
        </a>
        <span class="header-usuario-icon ">
          <i class="fi fi-rr-angle-small-down"></i>
        </span>
        <nav class="header-usuario-menu">
          <ul>
            <li>
              <span id ="cerrar-sesion">
                Cerrar Sesión
              </span>
            </li>
          </ul>
        </nav>
      </div>
      <div class="header-foto">
        <img src="../assets/foto_ususario.jpg" alt="Foto del Empleado">
      </div>
    </section>
  `

  // headerModalMenu()
  // headerModalUsusario()
  // cerrarSesion()
  // cambiarBotonHeader()

  return $header
}


function activeForPath(PATH) {
  return LOCATION.pathname === PATH ? 'active' : ''
}

function headerModalMenu() {
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

function headerModalUsusario() {
  let $modalUsuario = document.querySelector('.header-usuario-menu')
  let $modalUsuariobton = document.querySelector('.header-usuario-icon') ?? null 
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

function cerrarSesion() {
  let $cerrarBton = document.querySelector('#cerrar-sesion')
  $cerrarBton.addEventListener('click', () => {
    localStorage.removeItem('login_success')
    LOCATION.href = PATH.INICIO_SESION
  })
}