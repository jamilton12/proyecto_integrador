export const BottonMas = ({onClick, title}) => {
  const $bottonMas = document.createElement('button')
  $bottonMas.classList.add('botton-mas')
  $bottonMas.onclick = onClick
  $bottonMas.title = title
  $bottonMas.innerHTML = `<i class="fi fi-rr-plus"></i>`

  return $bottonMas
}