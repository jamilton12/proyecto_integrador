export const TableElement = (props) => {
  const { className, children } = props

  const $td = document.createElement('td')
  $td.classList.add(className)
  $td.innerText = children

  return $td
}