import { Navbar } from "./Navbar.js"

export const SectionModal = ({rol}) => {
  const $sectionModal = document.createElement('section')
  $sectionModal.classList.add('header-modal')
  $sectionModal.innerHTML = `
  <div class="header-modal-button">
  <i class="fi fi-rr-menu-burger"></i>
  </div>
  `
  const $divModal = document.createElement('div')
  $divModal.classList.add('header-modal-container-menu')
  const $i = document.createElement('i')
  $i.classList.add('fi', 'fi-rr-cross')
  const $navModal = Navbar({ children: $i ,className: 'header-modal-menu', rol })
  $divModal.append($navModal)
  $sectionModal.append($divModal)
  return $sectionModal
}