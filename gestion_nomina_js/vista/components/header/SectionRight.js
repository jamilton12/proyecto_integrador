
export const SectionRight = ({ nombre = 'Usuario', url, image }) => {
  const $sectionRight = document.createElement('section')
  $sectionRight.classList.add('header-section-right')
  $sectionRight.innerHTML = `
      <div class="header-usuario-container">
        <a class="header-usuario" href="${url}" title="Usuario">
          <span id ="header-usuario-nombre">${nombre}</span>
        </a>
        <span class="header-usuario-icon " title="Menu">
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
        <img src="${image}" alt="Foto del Empleado">
      </div>
  `

  return $sectionRight
}