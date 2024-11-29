import registrosJson from "../mocks/registros.JSON" with { type: "json" }

export function registros() {
  const user = JSON.parse(localStorage.getItem('login_success'))
  const { cedula_Emple } = user
  let registros = JSON.parse(localStorage.getItem('registros')) || []
  let allRegistros = [...registrosJson, ...registros,]

  let registrosUser = allRegistros.filter(registro => registro.documento_Usuario === cedula_Emple)


  return registrosUser
}