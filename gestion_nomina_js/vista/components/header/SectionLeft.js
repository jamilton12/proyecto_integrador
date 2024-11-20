import { Navbar } from "./Navbar.js"

export const SectionLeft = ({rol}) => {
  const $sectionLeft = document.createElement('section')
  $sectionLeft.classList.add('header-section-left')
  const $nav = Navbar({ className: 'header-nav', rol: rol })
  $sectionLeft.append($nav)
  return $sectionLeft
}