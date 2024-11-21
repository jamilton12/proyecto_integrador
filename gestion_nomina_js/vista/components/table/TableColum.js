export const TableColum = (props) => {
  const { className, childrens } = props

  const $tr = document.createElement('tr')
  $tr.classList.add(className)
  childrens.map(child => $tr.append(child))

  return $tr
}