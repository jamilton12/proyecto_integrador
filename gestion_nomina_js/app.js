const user = JSON.parse(localStorage.getItem('login_success')) || false

//imports
import { LOCATION, PATH } from './vista/utils/const.js'
import { Header,headerModalMenu, headerModalUsusario, cerrarSesion/* , verEmpleados, nombreUsuario */ } from './vista/utils/Header.js'
import { marcar, cambiarHeader, cambiarBotonMarcar } from './vista/utils/Marcar.js'
import { iniciarSesion } from './vista/utils/iniciarSesion.js'
import { CrearTabla } from './vista/utils/Nomina.js'
import { recetRegistros } from './modelo/marcar/registroInOut.js'

if (!user && LOCATION.pathname !== PATH.INICIO_SESION) {
    LOCATION.href = PATH.INICIO_SESION
}else if (user && (LOCATION.pathname === PATH.INDEX || LOCATION.pathname === PATH.INICIO_SESION)) {
    LOCATION.href = PATH.INICIO
}

//funciones

if (LOCATION.pathname != PATH.INICIO_SESION) {
    //header
    Header()
    headerModalMenu()
    headerModalUsusario()
    // verEmpleados()
    // nombreUsuario()

    //marcar
    marcar()
    cambiarHeader() 
    
    //cerrar sesion
    cerrarSesion()
}else{
    iniciarSesion()
}

if (LOCATION.pathname === PATH.MARCAR) {
    cambiarBotonMarcar()
}

if (LOCATION.pathname === PATH.NOMINA) {
    CrearTabla()
}

    // recetRegistros()