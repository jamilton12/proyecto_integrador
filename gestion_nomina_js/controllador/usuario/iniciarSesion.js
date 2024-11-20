import { validarUsuario } from "../../modelo/usuario/iniciarSesion.js"
import { LOCATION, PATH} from "../../utils/const.js"

export function iniciarSesion() {
  let $loginForm = document.querySelector('#login-form')
  let $userName = document.querySelector('#userName')
  let $password = document.querySelector('#password')
  let $message = document.querySelector('.login-error-message p')

  $loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const userValue = $userName.value
    const passwordValue = $password.value
    let user = validarUsuario(userValue, passwordValue)
    if (!user) {
      $message.style.display = 'block'
      return
    }

    localStorage.setItem('login_success', JSON.stringify(user))
    LOCATION.href = PATH.INICIO
  })
}

export function logaut() {
  localStorage.removeItem('login_success')
  return
}