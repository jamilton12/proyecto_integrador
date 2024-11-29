
export const TitleSection = (props) => {
  const { children } = props

  const $title = document.createElement('h3')
  $title.classList.add('title-section')
  $title.innerText = children

  return $title
} 