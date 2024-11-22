export const Input = (props) => {
  const { className, type, name, placeholder = '', value = '', label = '', options } = props

  if (type === 'radio') {
    const $div = document.createElement('div')
    $div.classList.add('input-radio')
    const $label = document.createElement('label')
    $label.innerText = label
    $div.append($label)
    options.map((option) => {
      const $input = document.createElement('input')
      $input.type = type
      $input.name = name
      $input.placeholder = placeholder
      $input.value = option
      $input.classList.add(className)
      $div.append($input)
      const $label = document.createElement('label')
      $label.innerText = option
      $div.append($label) 
    })
    return $div 
  }

  if (type === 'select') {
    const $div = document.createElement('div')
    const $select = document.createElement('select')
    $select.name = name
    $select.classList.add(className)
    const $label = document.createElement('label')
    $label.innerText = label
    $div.append($label)
    options.map((option) => {
      const $option = document.createElement('option')
      $option.value = option
      $option.innerText = option
      $select.append($option)
    })
    $div.append($select)
    return $div
  }

    const $input = document.createElement('input')
    const $label = document.createElement('label')
    const $div = document.createElement('div')
    
    $label.innerText = label
    $input.type = type
    $input.name = name
    $input.placeholder = placeholder
    $input.value = value
    $input.classList.add(className)
    $div.append($label)
    $div.append($input)

  return $div
}