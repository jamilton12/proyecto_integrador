export const SectionBienveniada = () => {
  const $section = document.createElement('section')
  $section.classList.add('main-empresa-container')
  $section.innerHTML = `
        <div class="main-empresa-foto">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVPLNjnsBWtkYQFdu32AzJyiTv3D6D_J0Bg&s" alt="">
        </div>
        <div class="main-empresa-informacion">
          <h1><span>Bienvenido</span> Empleado de empresa</h1>
          <p class="parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, officiis. Dignissimos</p>
          <div class="detalle-empresa" />
        </div>

  `

  return $section
}