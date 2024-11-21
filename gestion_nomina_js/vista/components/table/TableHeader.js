export const TableHeader = (props) => {
  const { className, children } = props

  const $th = document.createElement('thead')
  $th.classList.add(className)
  $th.append(children)

  return $th
}