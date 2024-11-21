export const TableBody = (props) => {
  const { className, childrens } = props

  const $tbody = document.createElement('tbody')
  $tbody.classList.add(className)
  childrens.map(child => $tbody.append(child))

  return $tbody
}