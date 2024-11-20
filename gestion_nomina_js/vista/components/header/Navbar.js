import { LOCATION, PATH } from "../../../utils/const.js"


const navList = [
  {
    nombre: 'Inicio',
    id : '',
    isSelected : isSelected(PATH.INICIO),
    href : PATH.INICIO
  },{
    nombre: 'Marcar Ingreso',
    id : '',
    isSelected : isSelected(PATH.MARCAR),
    href : PATH.MARCAR
  },
  {
    nombre: 'Nomina',
    id : '',
    isSelected : isSelected(PATH.NOMINA),
    href : PATH.NOMINA
  },
  {
    nombre: 'Empleados',
    id : '',
    isSelected : isSelected(PATH.EMPLEADOS),
    href : PATH.EMPLEADOS
  }
]

export const Navbar = (props) => {
  const { className, rol } = props
  const $nav = document.createElement('nav')
  $nav.classList.add(className)
  navList.map(nav => {
    if (nav.nombre === 'Empleados'){
      if (rol !== 'admin' && rol !== 'jefe') {
        return
      }
    } 
    const $a = document.createElement('a')
    $a.classList.add('header-button' )
    if (nav.isSelected) {
      $a.classList.add('active')
    }

    $a.href = nav.href
    $a.textContent = nav.nombre
    $nav.append($a)
  })

  return $nav
}

function isSelected(path) {
  return LOCATION.hash === path
}