export function Marcar() {
  const $mian = document.createElement('main')
  $mian.innerHTML = `    
    <section class="marcar-section">
      <span class="marcar-button">
        Marcar ingreso
      </span>
    </section>
    `

  return $mian
}