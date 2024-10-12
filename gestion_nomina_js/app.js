const user = JSON.parse(localStorage.getItem('login_success')) || false

if (!user) {
    window.location.href = '/gestion_nomina_js/vista/paginas/IniciarSesion.html'
}


//Login 

let  $loginForm = document.querySelector('#login-form')
let  $userName = document.querySelector('#userName')
let  $password = document.querySelector('#password')


//header 
let $headerBtonModal = document.querySelector('.header-modal-button')
let $headerModal = document.querySelector('.header-modal-container-menu')
let $closeModal = document.querySelector('.header-modal-container-menu i')
let $modalUsuario = document.querySelector('.header-usuario-menu')
let $modalUsuariobton = document.querySelector('.header-usuario-icon')

//marcar 
let $headerbtonMarcar = document.querySelector('#header-button-marcar')
let $btonMarcar = document.querySelector('.marcar-button')


//imports
import {headerModalMenu, headerModalUsusario } from './vista/utils/Header.js'
import {marcarIngreso} from './vista/utils/Marcar.js'
import {iniciarSesion} from './vista/utils/iniciarSesion.js'


//funciones

headerModalMenu($headerBtonModal,$headerModal,$closeModal);
headerModalUsusario($modalUsuario,$modalUsuariobton);


marcarIngreso($btonMarcar, $headerbtonMarcar)


iniciarSesion()