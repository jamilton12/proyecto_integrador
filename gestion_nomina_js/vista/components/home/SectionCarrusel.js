export const SectionCarrusel = () => {
  const $section = document.createElement('section')
  $section.classList.add('carousel')
  const $div = document.createElement('div')
  $div.classList.add('carousel-container')
  $div.innerHTML = `
    <div class="carousel-slide">
      <img src="https://blog.comparasoftware.com/wp-content/uploads/2023/11/analisis-de-un-proyecto-1024x640.jpg" alt="Imagen 1" class="carousel-image active">
      <img src="https://lirp.cdn-website.com/7a848e1e/dms3rep/multi/opt/asian-business-woman-manager-analyzing-datum-in-charts-and-typing-on-computer-making-notes-in-documents-on-the-table-in-office-vintage-color-selective-focus-business-concept-1920w.jpg" alt="Imagen 2" class="carousel-image">
      <img src="https://www.obsbusiness.school/sites/obsbusiness.school/files/images/cronograma-de-actividades.jpg" alt="Imagen 3" class="carousel-image">
      <!-- Puedes agregar más imágenes según lo necesites -->
    </div>
  `
  const $prev = document.createElement('button')
  $prev.classList.add('prev')
  $prev.title = 'Anterior'
  $prev.innerHTML = '&#10094;'
  $prev.onclick = moveSlide
  const $next = document.createElement('button')
  $next.classList.add('next')
  $next.title = 'Siguiente'
  $next.innerHTML = '&#10095;'
  $next.onclick = moveSlide
  $div.append($prev, $next)


  $section.append($div)

  return $section
}

function moveSlide() {
  console.log('hola');
  const slides = document.querySelectorAll('.carousel-image')

  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains('active')) {
      slides[i].classList.remove('active')
      if (i === slides.length - 1) {
        slides[0].classList.add('active')
      } else {
        slides[i + 1].classList.add('active')
      }
      break
    }
  }

}


  //     <section class="carousel">
  //         <div class="carousel-container">
  //           <div class="carousel-slide">
  //             <img src="https://blog.comparasoftware.com/wp-content/uploads/2023/11/analisis-de-un-proyecto-1024x640.jpg" alt="Imagen 1" class="carousel-image">
  //             <img src="https://lirp.cdn-website.com/7a848e1e/dms3rep/multi/opt/asian-business-woman-manager-analyzing-datum-in-charts-and-typing-on-computer-making-notes-in-documents-on-the-table-in-office-vintage-color-selective-focus-business-concept-1920w.jpg" alt="Imagen 2" class="carousel-image">
  //             <img src="https://www.obsbusiness.school/sites/obsbusiness.school/files/images/cronograma-de-actividades.jpg" alt="Imagen 3" class="carousel-image">
  //             <!-- Puedes agregar más imágenes según lo necesites -->
  //           </div>
  //           <button class="prev " onclick="moveSlide">&#10094;</button>
  //           <button class="next" onclick="moveSlide">&#10095;</button>
  //         </div>
  //     </section>