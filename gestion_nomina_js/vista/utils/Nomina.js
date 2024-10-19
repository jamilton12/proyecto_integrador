import registros from '../../modelo/mocks/registros.JSON' with { type: "json" }

let registro = JSON.parse(localStorage.getItem('registros')) || [registros]

if (!(registro.includes(registros))) {
  registro.push(registros)
} 

export function CrearTabla() {
  let $tableBody = document.querySelector('.nomina-table')

  registro.forEach((registro) => {
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
    <td class="nomina-table-cell"></td> 
    `
  })//TODO añadir diferencia de horas

  let $trFoot = document.createElement('tbody')
  $trFoot.className = 'nomina-table-head'
  $tableBody.appendChild($trFoot)
  $trFoot.innerHTML = `
    <tr class="nomina-table-row">
    <th class="nomina-table-cell">Nomina actual</th>
    <td class="nomina-table-cell"></td>
    <th class="nomina-table-cell">Total Horas</th>
    <td class="nomina-table-cell"></td>
  `
}


{/* <tbody>
<tr class="nomina-table-row">
<td class="nomina-table-cell">1</td>
<td class="nomina-table-cell">01/01/2022</td>
<td class="nomina-table-cell">00:00</td>
<td class="nomina-table-cell">00:00</td>
<td class="nomina-table-cell">10</td>
</tr>

</tbody>
<tfoot class="nomina-table-head">
<tr class="nomina-table-row">
<th class="nomina-table-cell">Nomina actual</th>
<td class="nomina-table-cell">1500000</td>
<th class="nomina-table-cell">Total Horas</th>
<td class="nomina-table-cell">47</td>
</tr> */}