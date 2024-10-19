import usuario from '../mocks/usuario.JSON' with { type: "json" }

export function validarUsuario($usuario, $clave) {

  let Users = JSON.parse(localStorage.getItem('users')) || usuario

  if (!(Users.includes(usuario))) {
    Users.concat(usuario)
  }

  const usuarioValido = Users.find(user => user.cedula === $usuario && user.clave === $clave)

  if (!usuarioValido) {
    return false
  }

  return usuarioValido
}