import { tableNomina } from "../components/tableNomina/tableNomina.js"

export default function Nomina() {
  const $mian = document.createElement('main')
  $mian.classList.add('nomina-main')
  const $table = tableNomina()
  $mian.append($table)

  return $mian
}
