import { traerEmpleados } from "../../../controllador/empleado/informacion.js"
import { traerRegistros } from "../../../controllador/nomina/registros.js"
import { Table } from "../table/Table.js"
import { TableBody } from "../table/TableBody.js"
import { TableColum } from "../table/TableColum.js"
import { TableElement } from "../table/TableElement.js"
import { TableElementHeader } from "../table/TableElementHeader.js"
import { TableFoot } from "../table/TableFoot.js"
import { TableHeader } from "../table/TableHeader.js"

const tableNominaHeader = [
  "Id",
  "Nombre Completo",
  "Cargo",
  "Numero Horas Totale",
  "Nomina Actual",

]

const user = JSON.parse(localStorage.getItem('login_success'))

export const TableEmpleados = (props) => {
  const empleados = traerEmpleados()
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

  const $tableColumns = empleados.map((empleado) => {
    const { cedula_Emple, nombre_Emple, apellido_Emple, cargo_Emple } = empleado
    const { nomina, totalHoras } = traerRegistros(empleado)

    return TableColum({
      className: 'nomina-table-row',
      childrens: [
        TableElement({ className: 'nomina-table-cell', children: cedula_Emple }),
        TableElement({ className: 'nomina-table-cell', children: nombre_Emple + ' ' + apellido_Emple }),
        TableElement({ className: 'nomina-table-cell', children: cargo_Emple }),
        TableElement({ className: 'nomina-table-cell', children: totalHoras }),
        TableElement({ className: 'nomina-table-cell', children: nomina }),
      ]
    })
  })

  const $tBody = TableBody({
    className: 'nomina-table-body',
    childrens: $tableColumns
  })


  const $table = Table(
    {
      className: 'nomina-table',
      childrens: [$tableHeaders, $tBody]
    }
  )
  return $table
} 