export function nuevoRegistro(registro) {
  let registros = JSON.parse(localStorage.getItem('registros')) || []

  registros.push(registro)

  localStorage.setItem('registros', JSON.stringify(registros))
}

export function actualizarRegistro(registro) {
  let registros = JSON.parse(localStorage.getItem('registros')) || []

  for (let i = 0; i < registros.length; i++) {
    if (registros[i].esta_Activa === true) {
      registros[i] = registro
    }
  }

  localStorage.setItem('registros', JSON.stringify(registros))
}