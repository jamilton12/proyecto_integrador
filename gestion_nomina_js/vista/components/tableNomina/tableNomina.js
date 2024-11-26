import { traerRegistros } from "../../../controllador/nomina/registros.js"
import { Table } from "../table/Table.js"
import { TableBody } from "../table/TableBody.js"
import { TableColum } from "../table/TableColum.js"
import { TableElement } from "../table/TableElement.js"
import { TableElementHeader } from "../table/TableElementHeader.js"
import { TableFoot } from "../table/TableFoot.js"
import { TableHeader } from "../table/TableHeader.js"

const tableNominaHeader = [
  "Cedula",
  "Fecha inicio de nomina",
  "Fecha fin de nomina",
  "Horas Tabajadas",
  "Nomina neta",
  "Descuentos por salud",
  "Descuentos por pension",
  "Nomina Actual",
]

const user = JSON.parse(localStorage.getItem('login_success'))

export const TableNomina = () => {
  const { nomina, totalHoras, netoNomina, descuentoSalud, descuentoPension, diasTrabajados } = traerRegistros(user)
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

  const $tableColumns = [TableColum({
    className: 'nomina-table-row',
    childrens: [
      TableElement({ className: 'nomina-table-cell', children: user.cedula_Emple }),
      TableElement({ className: 'nomina-table-cell', children: '' }),
      TableElement({ className: 'nomina-table-cell', children: '' }),
      TableElement({ className: 'nomina-table-cell', children: diasTrabajados }),
      TableElement({ className: 'nomina-table-cell', children: netoNomina }),
      TableElement({ className: 'nomina-table-cell', children: descuentoSalud }),
      TableElement({ className: 'nomina-table-cell', children: descuentoPension }),
      TableElement({ className: 'nomina-table-cell', children: nomina }),
    ]
  })]

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


  const $table = Table(
    {
      // className: 'nomina-table',
      childrens: [$tableHeaders, $tBody]
    }
  )
  return $table
}