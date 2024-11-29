
export function addEmpleado(empleado, familia, contrato, usuario) {
  const empleados = JSON.parse(localStorage.getItem('empleados')) || []
  const familiares = JSON.parse(localStorage.getItem('familiares')) || []
  const contratos = JSON.parse(localStorage.getItem('contratos')) || []
  const usuarios = JSON.parse(localStorage.getItem('users')) || []
  empleados.push(empleado)
  familiares.push(familia)
  contratos.push(contrato)
  usuarios.push(usuario)
  console.log(empleados, familiares, contratos, usuarios);
  
  localStorage.setItem('empleados', JSON.stringify(empleados))
  localStorage.setItem('familiares', JSON.stringify(familiares))
  localStorage.setItem('contratos', JSON.stringify(contratos))
  localStorage.setItem('users', JSON.stringify(usuarios))
}

export function recetEMpleados() {
  localStorage.removeItem('empleados')
  localStorage.removeItem('familiares')
  localStorage.removeItem('contratos')
  localStorage.removeItem('users')
}