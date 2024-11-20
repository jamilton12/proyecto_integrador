import { traerNomina } from "../../controllador/nomina/Nomina.js"

import { Table } from "../components/table/Table.js"
import { TableElementHeader } from "../components/table/TableElementHeader.js"
import { TableHeader } from "../components/table/TableHeader.js"
import { TableColum } from "../components/table/TableColum.js"
import { TableElement } from "../components/table/TableElement.js"
import { TableBody } from "../components/table/TableBody.js"
import { TableFoot } from "../components/table/TableFoot.js"

const tableNominaHeader = [
  "Id",
  "FechaIngreso",
  "HoraIngreso",
  "FechaSalida",
  "HoraSalida",
  "HorasTrabajadas",
]

export default function Nomina() {
  const $mian = document.createElement('main')
  $mian.classList.add('nomina-main')
  const { nomina, totalHoras, registros, diferencias } = traerNomina()
  const $headers = tableNominaHeader.map((header) => {
    return TableElementHeader({
      className: 'nomina-table-cell',
      children: header
    })
  })

  const $columnHeaders = TableColum({
    className: 'nomina-table-row',
    childrens: $headers
  })

  const $tableHeaders = TableHeader({
    className: 'nomina-table-head',
    children: $columnHeaders
  })

  const $tableColumns = registros.map((registro) => {
    const { registro: { fecha_ingreso, hora_ingreso, fecha_salida, hora_salida }, documento_Usuario } = registro

    return TableColum({
      className: 'nomina-table-row',
      childrens: [
        TableElement({ className: 'nomina-table-cell', children: documento_Usuario }),
        TableElement({ className: 'nomina-table-cell', children: fecha_ingreso }),
        TableElement({ className: 'nomina-table-cell', children: hora_ingreso }),
        TableElement({ className: 'nomina-table-cell', children: fecha_salida }),
        TableElement({ className: 'nomina-table-cell', children: hora_salida }),
        TableElement({ className: 'nomina-table-cell', children: diferencias[registros.indexOf(registro)] }),
      ]
    })
  })

  const $tBody = TableBody({
    className: 'nomina-table-body',
    childrens: $tableColumns
  })

  const $tFootColumn = TableColum({
    className: 'nomina-table-row',
    childrens: [
      TableElementHeader({ className: 'nomina-table-cell', children: 'Nomina actual' }),
      TableElement({ className: 'nomina-table-cell', children: nomina }),
      TableElementHeader({ className: 'nomina-table-cell', children: 'Total Horas' }),
      TableElement({ className: 'nomina-table-cell', children: totalHoras }),
    ]
  })

  const $tFoot = TableFoot({
    className: 'nomina-table-head',
    childrens: [$tFootColumn]
  })

  const $table = Table(
    {
      className: 'nomina-table',
      childrens: [$tableHeaders, $tBody, $tFoot]
    }
  )

  $mian.append($table)

  return $mian
}
// $mian.innerHTML = `
//   <table class="nomina-table">
//     <thead class="nomina-table-head">
//       <tr class="nomina-table-row">
//         <th class="nomina-table-cell">Id</th>
//         <th class="nomina-table-cell">Fecha Ingreso</th>
//         <th class="nomina-table-cell">Hora Entrada</th>
//         <th class="nomina-table-cell">Fecha Salida</th>
//         <th class="nomina-table-cell">Hora Salida</th>
//         <th class="nomina-table-cell">Horas Trabajadas</th>
//       </tr>
//     </thead>
//     <tbody class="nomina-table-body">
//       <!-- <tr class="nomina-table-row">
//         <td class="nomina-table-cell">1</td>
//         <td class="nomina-table-cell">01/01/2022</td>
//         <td class="nomina-table-cell">00:00</td>
//         <td class="nomina-table-cell">00:00</td>
//         <td class="nomina-table-cell">10</td>
//       </tr> -->
//     </tbody>
//     <!-- <tfoot class="nomina-table-head">
//       <tr class="nomina-table-row">
//         <th class="nomina-table-cell">Nomina actual</th>
//         <td class="nomina-table-cell">1500000</td>
//         <th class="nomina-table-cell">Total Horas</th>
//         <td class="nomina-table-cell">47</td>
//       </tr>
//     </tfoot> -->
//   </table>
// `