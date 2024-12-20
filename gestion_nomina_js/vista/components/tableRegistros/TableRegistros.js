import { traerRegistros } from "../../../controllador/nomina/registros.js"
import { Table } from "../table/Table.js"
import { TableBody } from "../table/TableBody.js"
import { TableColum } from "../table/TableColum.js"
import { TableElement } from "../table/TableElement.js"
import { TableElementHeader } from "../table/TableElementHeader.js"
import { TableFoot } from "../table/TableFoot.js"
import { TableHeader } from "../table/TableHeader.js"


const tableRegistrosHeader = [
  "Cedula",
  "Fecha Ingreso",
  "Hora Ingreso",
  "Fecha Salida",
  "Hora Salida",
  "Horas Trabajadas",
]

const user = JSON.parse(localStorage.getItem('login_success'))

export const TableRegistros = () => {
  const { nomina, totalHoras, registros, diferencias, diasTrabajados } = traerRegistros(user)
  const $headers = tableRegistrosHeader.map((header) => {
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
      TableElementHeader({ className: 'nomina-table-cell', children: 'Total Horas' }),
      TableElement({ className: 'nomina-table-cell', children: totalHoras }),
      TableElementHeader({ className: 'nomina-table-cell', children: 'Dias trabajados' }),
      TableElement({ className: 'nomina-table-cell', children: diasTrabajados }),
    ]
  })

  const $tFoot = TableFoot({
    className: 'nomina-table-head',
    childrens: [$tFootColumn]
  })

  const $table = Table(
    {
      // className: 'nomina-table',
      childrens: [$tableHeaders, $tBody, $tFoot]
    }
  )
  return $table
}