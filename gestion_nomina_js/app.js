const user = JSON.parse(localStorage.getItem('login_success')) || false

//imports
import { INICIO_SESION, LOCATION, INICIO, INDEX, MARCAR, NOMINA } from './vista/utils/const.js'
import { headerModalMenu, headerModalUsusario, cerrarSesion, verEmpleados, nombreUsuario } from './vista/utils/Header.js'
import { marcar, cambiarHeader, cambiarBotonMarcar } from './vista/utils/Marcar.js'
import { iniciarSesion } from './vista/utils/iniciarSesion.js'
import { CrearTabla } from './vista/utils/Nomina.js'
import { recetRegistros } from './modelo/marcar/registroInOut.js'

if (!user && LOCATION.pathname !== INICIO_SESION) {
    LOCATION.href = INICIO_SESION
}else if (user && (LOCATION.pathname === INDEX || LOCATION.pathname === INICIO_SESION)) {
    LOCATION.href = INICIO
}

//funciones

if (LOCATION.pathname != INICIO_SESION) {
    //header
    headerModalMenu()
    headerModalUsusario()
    verEmpleados()
    nombreUsuario()

    //marcar
    marcar()
    cambiarHeader() 
    
    //cerrar sesion
    cerrarSesion()
}else{
    iniciarSesion()
}

if (LOCATION.pathname === MARCAR) {
    cambiarBotonMarcar()
}

if (LOCATION.pathname === NOMINA) {
    CrearTabla()
}

// recetRegistros()