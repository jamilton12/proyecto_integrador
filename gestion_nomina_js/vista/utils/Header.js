import { LOCATION, PATH } from "./const.js";

export function Header() {
  const user = JSON.parse(localStorage.getItem('login_success'))
  const { nombre , rol } = user
  const $body = document.querySelector('body')
  let $header = document.createElement('header')
  $header.classList.add('header')
  $header.innerHTML = `
      <section class="header-section-left">
      <a class="header-button ${LOCATION.pathname === PATH.INICIO ? 'active' : ''}" href="${PATH.INICIO}">Inicio</a>
      <a class="header-button ${LOCATION.pathname === PATH.MARCAR ? 'active' : ''}" id="header-button-marcar" href="${PATH.MARCAR}">Marcar Ingreso</a>
      ${ rol === 'admin' ?  `<a class="header-button ${LOCATION.pathname === PATH.NOMINA ? 'active' : ''}"href="${PATH.NOMINA}">Nomina</a>` : ''}  
      ${ rol === 'jefe' ?  `<a class="header-button ${LOCATION.pathname === PATH.NOMINA ? 'active' : ''} "href="${PATH.NOMINA}">Nomina</a>` : ''}  
      <a class="header-button ${LOCATION.pathname === PATH.EMPLEADOS ? 'active' : ''}" id="ver-empleados" href="${PATH.EMPLEADOS}">Empleados</a>  
    </section>
    
    <section class="header-modal">
      <div class="header-modal-button">
        <i class="fi fi-rr-menu-burger"></i>
      </div>
      <div class="header-modal-container-menu">
        <nav class="header-modal-menu">
          <i class="fi fi-rr-cross"></i>
          <a class="header-button ${LOCATION.pathname === PATH.INICIO ? 'active' : ''}" href="${PATH.INICIO}">Inicio</a>
          <a class="header-button ${LOCATION.pathname === PATH.MARCAR ? 'active' : ''}" id="header-button-marcar" href="${PATH.MARCAR}">Marcar Ingreso</a>
          ${ rol === 'admin' ?  `<a class="header-button ${LOCATION.pathname === PATH.NOMINA ? 'active' : ''}"href="${PATH.NOMINA}">Nomina</a>` : ''}  
          ${ rol === 'jefe' ?  `<a class="header-button ${LOCATION.pathname === PATH.NOMINA ? 'active' : ''} "href="${PATH.NOMINA}">Nomina</a>` : ''}  
          <a class="header-button ${LOCATION.pathname === PATH.EMPLEADOS ? 'active' : ''}" id="ver-empleados" href="${PATH.EMPLEADOS}">Empleados</a>
        </nav>
      </div>
    </section>
    <section class="header-section-right">
      <div class="header-usuario-container">
        <a class="header-usuario" href="./Usuario.html">
          <span id ="header-usuario-nombre">${nombre}</span>
        </a>
        <span class="header-usuario-icon ">
          <i class="fi fi-rr-angle-small-down "></i>
        </span>
        <nav class="header-usuario-menu ">
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
  $body.insertAdjacentHTML('afterbegin', $header.outerHTML)

}

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
    LOCATION.href = PATH.INICIO_SESION
  })
}