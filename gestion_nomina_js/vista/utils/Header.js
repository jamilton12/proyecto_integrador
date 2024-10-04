
export function headerModalMenu($headerBtonModal,$headerModal,$closeModal) {
  $headerBtonModal.addEventListener('click', () => {
    $headerModal.classList.toggle('modal-active');
  });
  $closeModal.addEventListener('click', () => {
    $headerModal.classList.toggle('modal-active');
  });
}

export function headerModalUsusario($modalUsuario,$modalUsuariobton) {
  let on = false;

  $modalUsuariobton.addEventListener('click', () => {
    if (on) {
      $modalUsuario.classList.remove('active');
      $modalUsuariobton.innerHTML = '<i class="fi fi-rr-angle-small-down"></i>';
      on = false;
    } else {
      $modalUsuario.classList.add('active');
      $modalUsuariobton.innerHTML = '<i class="fi fi-rr-angle-small-up"></i>';
      on = true;
    }
  })
}