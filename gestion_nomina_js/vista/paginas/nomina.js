import { TableNomina } from "../components/tableNomina/TableNomina.js"
import { TableRegistros } from "../components/tableRegistros/TableRegistros.js"
import { TitleSection } from "../components/titleSection/TitleSection.js"

export default function Nomina() {
  const $mian = document.createElement('main')
  $mian.classList.add('nomina-main')
  const $titleRegistros = TitleSection({children: 'Registros'})
  const $titleNomina = TitleSection({children: 'Nomina'})
  const $tableRegistros = TableRegistros()
  const $tableNomina = TableNomina()
  const $section = document.createElement('section')
  $section.classList.add('nomina-table-section')
  $section.append($titleRegistros)
  $section.append($tableRegistros)
  $section.append($titleNomina)
  $section.append($tableNomina)
  $mian.append($section)

  return $mian
}
