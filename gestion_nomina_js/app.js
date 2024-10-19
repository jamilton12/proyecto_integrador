const user = JSON.parse(localStorage.getItem('login_success')) || false

//imports
import { LOCATION, PATH } from './vista/utils/const.js'
import { Header } from './vista/utils/Header.js'
import { Marcar } from './vista/utils/Marcar.js'
import { iniciarSesion } from './vista/utils/iniciarSesion.js'
import { Nomina } from './vista/utils/Nomina.js'
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

    //marcar
    Marcar()

    //nomina
    Nomina()
}else{
    iniciarSesion()
}

    // recetRegistros()