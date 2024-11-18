
export function Inicio () {
  const $mian = document.createElement('main')
  $mian.innerHTML = `
      <section class="head-main"> 
      <div class="main-empresa-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Marca.svg" alt="">
        <h1>Bienvenido Epleado de empersa</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure error unde sapiente deserunt facilis. Fuga recusandae iure consequatur rerum dolore animi rem. Dolores, consequuntur. Illum quis repellat dolore voluptatum incidunt?</p>
      </div>
      <div class="main-articles-container">
        <article class="article-principal">
          <section> 
            <img src="https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA" alt="">
          </section>
          <section>
            <h3>Titulo de articulo</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Numquam quibusdam impedit odit suscipit, nihil sint dolor repudiandae deserunt optio, 
              qui architecto iste nam exercitationem omnis perspiciatis, fugit possimus! Eos.
            </p>
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
  `
  return $mian
}