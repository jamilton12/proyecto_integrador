import { LOCATION, PATH } from "../../../utils/const.js";
import { cambiarBotonHeader } from "../../../utils/Marcar.js";
import { Navbar } from "./Navbar.js";

export function Header() {
  const user = JSON.parse(localStorage.getItem('login_success')) ?? {}
  const { nombre, rol = 'admin' } = user

  const $header = document.createElement('header')
  $header.classList.add('header')

  const $nav = Navbar({ className: 'header-nav', rol: rol })
  const $navModal = Navbar({ className: 'header-modal-menu', rol: rol })

  const $sectionLeft = document.createElement('section')
  $sectionLeft.classList.add('header-section-left')
  $sectionLeft.append($nav)

  const $sectionModal = document.createElement('section')
  $sectionModal.classList.add('header-modal')
  $sectionModal.innerHTML = `
    <div class="header-modal-button">
      <i class="fi fi-rr-menu-burger"></i>
    </div>
  `
  const $divModal = document.createElement('div')
  $divModal.classList.add('header-modal-container-menu')
  const $i = document.createElement('i')
  $i.classList.add('fi', 'fi-rr-cross')
  $divModal.append($i)
  $divModal.append($navModal)
  $sectionModal.append($divModal)

  const $sectionRight = document.createElement('section')
  $sectionRight.classList.add('header-section-right')
  $sectionRight.innerHTML = `
      <div class="header-usuario-container">
        <a class="header-usuario" href="${PATH.USUARIO}">
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
        <img src="/gestion_nomina_js/vista/assets/foto_ususario.jpg" alt="Foto del Empleado">
      </div>
  `
  $sectionRight.append($sectionModal)
  $header.append($sectionLeft)
  $header.append($sectionRight)



  // headerModalMenu()
  // headerModalUsusario()
  // cerrarSesion()
  // cambiarBotonHeader()

  return $header
}


export function activeForPath(PATH) {
  return LOCATION.pathname === PATH ? 'active' : ''
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

export function cerrarSesion() {
  let $cerrarBton = document.querySelector('#cerrar-sesion')
  $cerrarBton.addEventListener('click', () => {
    localStorage.removeItem('login_success')
    LOCATION.href = PATH.INICIO_SESION
  })
}

  // $header.innerHTML = `
  //     <section class="header-section-left">
  //     ${Navbar({ className: 'header-button', rol: user.rol })}
  //     </section>
    
  //   <section class="header-modal">
  //     <div class="header-modal-button">
  //       <i class="fi fi-rr-menu-burger"></i>
  //     </div>
  //     <div class="header-modal-container-menu">
  //       <nav class="header-modal-menu">
  //         <i class="fi fi-rr-cross"></i>
  //         <a class="header-button ${activeForPath(PATH.INICIO)}" href="${PATH.INICIO}">Inicio</a>
  //         <a class="header-button ${activeForPath(PATH.MARCAR)}" id="header-button-marcar" href="${PATH.MARCAR}">Marcar Ingreso</a>
  //         <a class="header-button ${activeForPath(PATH.NOMINA)}" id="ver-empleados" href="${PATH.NOMINA}">Nomina</a>
  //         ${isAdmin ? `<a class="header-button ${activeForPath(PATH.EMPLEADOS)}"href="${PATH.EMPLEADOS}">Empleados</a>` : ''}
  //         ${isJefe ? `<a class="header-button ${activeForPath(PATH.EMPLEADOS)} "href="${PATH.EMPLEADOS}">Empleados</a>` : ''}
  //       </nav>
  //     </div>
  //   </section>
  //   <section class="header-section-right">
  //     <div class="header-usuario-container">
  //       <a class="header-usuario" href="${PATH.USUARIO}">
  //         <span id ="header-usuario-nombre">${nombre ?? 'Usuario'}</span>
  //       </a>
  //       <span class="header-usuario-icon ">
  //         <i class="fi fi-rr-angle-small-down"></i>
  //       </span>
  //       <nav class="header-usuario-menu">
  //         <ul>
  //           <li>
  //             <span id ="cerrar-sesion">
  //               Cerrar Sesión
  //             </span>
  //           </li>
  //         </ul>
  //       </nav>
  //     </div>
  //     <div class="header-foto">
  //       <img src="/gestion_nomina_js/vista/assets/foto_ususario.jpg" alt="Foto del Empleado">
  //     </div>
  //   </section>
  // `