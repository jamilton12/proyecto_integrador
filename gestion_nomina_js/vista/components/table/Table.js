export const Table = (props) => {
  const { className, childrens } = props

  const $table = document.createElement('table')
  $table.classList.add(className)
  childrens.map(child => $table.append(child))

  return $table
}