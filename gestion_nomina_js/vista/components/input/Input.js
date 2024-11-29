export const Input = (props) => {
  const { className , type, name, placeholder = '', value = '', label = '', options, disabled } = props
  const $div = document.createElement('div')
  $div.classList.add('input-container')
  const $label = document.createElement('label')
  const $input = document.createElement('input')


  if (type === 'radio') {
    const $divFromOption = document.createElement('div')
    $divFromOption.classList.add('input-radio')
    $label.innerText = label
    $div.append($label)
    options.map((option) => {
      const $input = document.createElement('input')
      if (value === option) {
        $input.checked = true
      }
      $input.type = type
      $input.name = name
      $input.placeholder = placeholder
      $input.value = option
      $input.id = option
      $input.classList.add('input-radio')
      $input.classList.add(className)
      $input.required = true
      $input.disabled = disabled 
      $divFromOption.append($input)
      const $label = document.createElement('label')
      $label.innerText = option
      $label.htmlFor = option
      $divFromOption.append($label) 
    })
    $div.append($divFromOption)
    return $div 
  }

  if (type === 'select') {
    const $select = document.createElement('select')
    $select.name = name
    $select.classList.add(className)
    $select.classList.add('input-select')
    $select.required = true
    $select.disabled = disabled
    $label.innerText = label
    $div.append($label)
    options.map((option) => {
      const $option = document.createElement('option')
      if (value === option) {
        $option.selected = true
      }
      $option.value = option
      $option.innerText = option
      $select.append($option)
    })
    $div.append($select)
    return $div
  }

    $label.innerText = label
    $input.type = type
    $input.name = name
    $input.placeholder = placeholder
    $input.value = value
    $input.required = true
    $input.disabled = disabled 
    $input.classList.add(className)
    $input.classList.add('input')
    $div.append($label)
    $div.append($input)

  return $div
}