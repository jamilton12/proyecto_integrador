import { validarUsuario } from "../../modelo/usuario/iniciarSesion"
export function iniciarSesion() {
  let  $loginForm = document.querySelector('#login-form')
  let  $userName = document.querySelector('#userName')
  let  $password = document.querySelector('#password')


  $loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const userValue = $userName.value
    const passwordValue = $password.value
    let user = validarUsuario()
    console.log(user);
    
  })
}