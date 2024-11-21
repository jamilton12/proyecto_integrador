export const BottonMas = ({onClick, title}) => {
  const $bottonMas = document.createElement('button')
  $bottonMas.classList.add('botton-mas')
  $bottonMas.onclick = abrirModal
  $bottonMas.title = title
  $bottonMas.innerHTML = `<i class="fi fi-rr-plus"></i>`

  return $bottonMas
}


function abrirModal() {
  const $modal = document.querySelector('.modal-section')
  $modal.style.display = 'flex'
}