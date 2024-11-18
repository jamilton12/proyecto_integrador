export function Nomina() {
  const $mian = document.createElement('main')
  $mian.classList.add('nomina-main')
  $mian.innerHTML = `    
    <table class="nomina-table">
      <thead class="nomina-table-head">
        <tr class="nomina-table-row">
          <th class="nomina-table-cell">Id</th> 
          <th class="nomina-table-cell">Fecha Ingreso</th>
          <th class="nomina-table-cell">Hora Entrada</th> 
          <th class="nomina-table-cell">Fecha Salida</th>
          <th class="nomina-table-cell">Hora Salida</th>
          <th class="nomina-table-cell">Horas Trabajadas</th>
        </tr>
      </thead>
      <tbody class="nomina-table-body">
        <!-- <tr class="nomina-table-row">
          <td class="nomina-table-cell">1</td>
          <td class="nomina-table-cell">01/01/2022</td>
          <td class="nomina-table-cell">00:00</td>
          <td class="nomina-table-cell">00:00</td>
          <td class="nomina-table-cell">10</td>
        </tr> -->
      </tbody>
      <!-- <tfoot class="nomina-table-head">
        <tr class="nomina-table-row">
          <th class="nomina-table-cell">Nomina actual</th>
          <td class="nomina-table-cell">1500000</td>
          <th class="nomina-table-cell">Total Horas</th>
          <td class="nomina-table-cell">47</td>
        </tr>
      </tfoot> -->
    </table>
  `
  return $mian
}