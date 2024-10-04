export function marcarIngreso($btonMarcar, $headerbtonMarcar) {

  let on = false;

  $btonMarcar.addEventListener('click', () => {
    console.log('on', on);
    
    if (on) {
      $headerbtonMarcar.innerText = 'Marcar Ingreso'
      $btonMarcar.innerText = 'Marcar Ingreso'
      on = false
    }else {
      $headerbtonMarcar.innerText = 'Marcar Salida'
      $btonMarcar.innerText = 'Marcar Salida'
      on = true
    }
    
  })
}