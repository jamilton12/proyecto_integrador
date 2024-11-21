export const TableElementHeader = (props) => {
  const { className, children } = props

  const $th = document.createElement('th')
  $th.classList.add(className)
  $th.innerText = children

  return $th
}