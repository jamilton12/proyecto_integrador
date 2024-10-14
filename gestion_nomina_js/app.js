const user = JSON.parse(localStorage.getItem('login_success')) || false

//imports
import { INICIOSESION, LOCATION, INICIO, INDEX } from './vista/utils/const.js'
import { headerModalMenu, headerModalUsusario, cerrarSesion } from './vista/utils/Header.js'
import { marcarIngreso, cambiarHeader } from './vista/utils/Marcar.js'
import { iniciarSesion } from './vista/utils/iniciarSesion.js'

if (!user && LOCATION.pathname !== INICIOSESION) {
    LOCATION.href = INICIOSESION
}else if (user && LOCATION.pathname === INDEX) {
    LOCATION.href = INICIO
}

//funciones

if (LOCATION.pathname != INICIOSESION) {
    //header
    headerModalMenu();
    headerModalUsusario();

    //marcar
    let onMarca = true
    let primeraMarca = false
    marcarIngreso(onMarca, primeraMarca)
    cambiarHeader(onMarca, primeraMarca)   
    
    //cerrar sesion
    cerrarSesion()
}else{
    iniciarSesion()
}
