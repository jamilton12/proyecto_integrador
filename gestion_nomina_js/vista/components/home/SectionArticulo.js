export const SectionArticulo = () => {
  const $section = document.createElement('section')
  $section.classList.add('section-empresa-articulos')
  $section.innerHTML = `
        <div class="section-empresa-articulos-left"> 
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVPLNjnsBWtkYQFdu32AzJyiTv3D6D_J0Bg&s" alt="">
          <div class="detalle-cuadrado" > </div>
        </div>
        <div class="section-empresa-articulos-right"> 
          <h2 class="titulo-articulo">
          Titulo de articulo
          </h2>
          <p cass="parrafo"> 
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
          </p>
          <div class="detalle-right" > </div>
        </div>
  `

  return $section
}