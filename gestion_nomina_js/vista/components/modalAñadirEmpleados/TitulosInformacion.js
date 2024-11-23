export const TitulosInformacion = (props) => {
  const { className, children } = props
  const $titulos = document.createElement('h3')
  $titulos.classList.add(className)
  $titulos.innerText = children

  return $titulos
}