import { lastRegistro } from "../../../controllador/nomina/Nomina.js"
import { LOCATION, PATH } from "../../../utils/const.js"


const navList = [
  {
    nombre: 'Inicio',
    id: '',
    href: PATH.INICIO
  }, {
    nombre: 'Marcar',
    id: 'header-button-marcar',
    href: PATH.MARCAR
  },
  {
    nombre: 'Nomina',
    id: 'ver-empleados',
    href: PATH.NOMINA
  },
  {
    nombre: 'Empleados',
    id: '',
    href: PATH.EMPLEADOS
  }
]

export const Navbar = (props) => {
  const { children, className, rol } = props
  const $nav = document.createElement('nav')
  const { esta_Activa } = lastRegistro()
  const islastRegistro = esta_Activa || false
  const tipoMarcar = islastRegistro ? ' Salida' : ' Ingreso'
  $nav.classList.add(className)
  if (children !== undefined) $nav.append(children)

  navList.map(nav => {
    if (nav.nombre === 'Empleados') {
      if (rol !== 'admin' && rol !== 'jefe') {
        return
      }
    }
    const $a = document.createElement('a')
    $a.classList.add('header-button')
    if (LOCATION.hash === nav.href) {
      $a.classList.add('active')
    }
    $a.title = nav.nombre
    $a.textContent = nav.nombre
    $a.href = nav.href
    $a.id = nav.id
    if (nav.nombre === 'Marcar') {
      $a.textContent = nav.nombre + tipoMarcar
    }
    $nav.append($a)
  })

  return $nav
}

