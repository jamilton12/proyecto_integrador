export const TableFoot = (props) => {
  const { className, childrens } = props

  const $tfoot = document.createElement('tfoot')
  $tfoot.classList.add(className)
  childrens.map(child => $tfoot.append(child))

  return $tfoot
}