
export const Modal = (props) => {
  const {children} = props
  const $modal = document.createElement('section')
  $modal.classList.add('modal-section')
  const $modalContainer = document.createElement('div')
  $modalContainer.classList.add('modal-container')
  const $bttonClose = document.createElement('button')
  $bttonClose.classList.add('modal-close')
  $bttonClose.title = 'Cerrar'
  $bttonClose.onclick = removeModal
  $bttonClose.innerHTML = `<i class="fi fi-rr-cross"></i>`
  $modalContainer.append($bttonClose)
  children.map(child => $modalContainer.append(child))
  $modal.append($modalContainer)
  return $modal
}

function removeModal() {
  console.log('modal cerrado');
  
}