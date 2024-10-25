import registrosJson from '../../modelo/mocks/registros.JSON' with { type: "json" }
import { LOCATION, PATH } from "./const.js"
import { calcularDiferencia, calcularNomina } from '../../modelo/marcar/calcualarNomina.js'

let registros = JSON.parse(localStorage.getItem('registros')) || []
registros = registros.concat(registrosJson)

export function Nomina() {
  
  if (LOCATION.pathname === PATH.NOMINA) return CrearTabla()
}


export function CrearTabla() {
  let $tableBody = document.querySelector('.nomina-table')
  const { nomina, totalHoras } = calcularNomina()

  registros.forEach((registro) => {
    let $tr = document.createElement('tr')
    const {registro : {fecha_ingreso, hora_ingreso, fecha_salida, hora_salida}, documento_Usuario} = registro

    $tr.className = 'nomina-table-row'
    $tableBody.appendChild($tr)
    $tr.innerHTML = `
    <td class="nomina-table-cell">${documento_Usuario}</td>
    <td class="nomina-table-cell">${fecha_ingreso}</td>
    <td class="nomina-table-cell">${hora_ingreso}</td>
    <td class="nomina-table-cell">${fecha_salida === '' ? '/' : fecha_salida}</td>
    <td class="nomina-table-cell">${hora_salida === '' ? '/' : hora_salida}</td>
    <td class="nomina-table-cell">${calcularDiferencia(registro)}</td> 
    `
  })

  let $trFoot = document.createElement('tbody')
  $trFoot.className = 'nomina-table-head'
  $tableBody.appendChild($trFoot)
  $trFoot.innerHTML = `
    <tr class="nomina-table-row">
    <th class="nomina-table-cell">Nomina actual</th>
    <td class="nomina-table-cell">${nomina}</td>
    <th class="nomina-table-cell">Total Horas</th>
    <td class="nomina-table-cell">${totalHoras}</td>
  `
}
