import Nomina from "../mocks/Nomina.JSON" with { type: "json" }

export function nomina() {
  const user = JSON.parse(localStorage.getItem('login_success'))
  const { cedula_Emple } = user
  let nomina = JSON.parse(localStorage.getItem('nomina')) || []

  let allNomina = [...Nomina, ...nomina,]

  let nominaUser = allNomina.filter(nomina => nomina.documento_Usuario === cedula_Emple)

  return nominaUser
}