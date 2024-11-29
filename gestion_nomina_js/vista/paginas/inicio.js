export default function Inicio() {
  const $mian = document.createElement("main");
  $mian.innerHTML = `
      <section class="head-main"> 
      <div class="main-empresa-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVPLNjnsBWtkYQFdu32AzJyiTv3D6D_J0Bg&s" alt="">
        <h1>Bienvenido Empleado de empresa</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure error unde sapiente deserunt facilis. Fuga recusandae iure consequatur rerum dolore animi rem. Dolores, consequuntur. Illum quis repellat dolore voluptatum incidunt?</p>
      </div>
      <div class="main-articles-container">
        <article class="article-principal">
      
          <section>
             <div class="carousel-container">
    <div class="carousel-slide">
      <img src="https://blog.comparasoftware.com/wp-content/uploads/2023/11/analisis-de-un-proyecto-1024x640.jpg" alt="Imagen 1" class="carousel-image">
      <img src="https://lirp.cdn-website.com/7a848e1e/dms3rep/multi/opt/asian-business-woman-manager-analyzing-datum-in-charts-and-typing-on-computer-making-notes-in-documents-on-the-table-in-office-vintage-color-selective-focus-business-concept-1920w.jpg" alt="Imagen 2" class="carousel-image">
      <img src="https://www.obsbusiness.school/sites/obsbusiness.school/files/images/cronograma-de-actividades.jpg" alt="Imagen 3" class="carousel-image">
      <!-- Puedes agregar más imágenes según lo necesites -->
    </div>
    <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
    <button class="next" onclick="moveSlide(1)">&#10095;</button>
  </div>
          </section>
        </article>
        <article class="article-segundario">
          <!-- <section>
            <img src="https://fastly.picsum.photos/id/213/536/354.jpg?hmac=uR4LvY7i-5xHRT95H_5axefzY962e0SahoabNthg3zg" alt="">
          </section> -->
          <section>
            <h4>Titulo de articulo</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Numquam quibusdam impedit odit suscipit, nihil sint dolor repudiandae deserunt optio, 
              qui architecto iste nam exercitationem omnis perspiciatis, fugit possimus! Eos, suscipit!
            </p>
          </section>
        </article>
        <article class="article-segundario">
          <!-- <section>
            <img src="https://fastly.picsum.photos/id/648/536/354.jpg?hmac=aiTRoFj_53OJi6_yAxgwFVIx99cVD05qpLBCWWj4zzg" alt="">
          </section> -->
          <section>
            <h4>Titulo de articulo</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Numquam quibusdam impedit odit suscipit, nihil sint dolor repudiandae deserunt optio, 
              qui architecto iste nam exercitationem omnis perspiciatis, fugit possimus! Eos, suscipit!
            </p>
          </section>
        </article>
      </div>
    </section>
  `;
  return $mian;
  
}
