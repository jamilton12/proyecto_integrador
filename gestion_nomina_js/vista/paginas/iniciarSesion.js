

export function IniciarSesion() {
  const $mianInicioSesion = document.createElement('main')
  $mianInicioSesion.classList.add('login-body')
  $mianInicioSesion.innerHTML = `
      <section class="login-section">
      <h2>Iniciar Sesión</h2>
      <form id="login-form">
        <div class="login-error-message">
          <p >Contraseña o Usuario Incorrectos</p>
        </div>
        <input type="text" id="userName" placeholder="Usuario">
        <input type="password" id="password" placeholder="Contraseña">
        <a href="">¿Olvidaste tu contraseña?</a>
        <input type="submit" value="Iniciar Sesión">
      </form>
    </section>
  `

  return $mianInicioSesion
}
