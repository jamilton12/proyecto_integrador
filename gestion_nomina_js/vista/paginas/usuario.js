export default function Usuario() {
  const $mian = document.createElement('main')
  $mian.classList.add('usuario-main')
  $mian.innerHTML = `
    <nav class="usuario-menu">
      <ul>
        <li class="usuario-menu-option active">
          Información Personal
        </li>
        <li class="usuario-menu-option">
          Información Familiar
        </li>
        <li class="usuario-menu-option">
          Información de Nomina
        </li>
      </ul>
    </nav>
    <section class="usuario-informacion">
      <div class="usuario-informacion-container">
        <h3 class="usuario-informacion-title">Información Personal</h3>
        <div class="usuario-informacion-datos">
          <div class="usuario-informacion-dato">
            <span class="dato-title">Nombre</span>
            <span class="dato-value"></span>
          </div>
          <div class="usuario-informacion-dato">
            <span class="dato-title">Apellidos</span>
            <span class="dato-value"></span>
          </div>          
          <div class="usuario-informacion-dato">
            <span class="dato-title">Documento</span>
            <span class="dato-value"></span>
          </div>          
          <div class="usuario-informacion-dato">
            <span class="dato-title">Edad</span>
            <span class="dato-value"></span>
          </div>
        </div>
        <img src="../assets/foto_ususario.jpg" alt="Foto del Empleado">
        <div class="usuario-informacion-dato">
          <span class="dato-title">Fecha de Nacimiento</span>
          <span class="dato-value"></span>
        </div>
        <div class="usuario-informacion-dato">
          <span class="dato-title">Genero</span>
          <span class="dato-value"></span>
        </div>
        <div class="usuario-informacion-dato">
          <span class="dato-title">i</span>
          <span class="dato-value"></span>
        </div>
        <div class="usuario-informacion-dato">
          <span class="dato-title">E-mail</span>
          <span class="dato-value"></span>
        </div>
        <div class="usuario-informacion-dato">
          <span class="dato-title">Numero de Telefono</span>
          <span class="dato-value"></span>
        </div>
        <div class="usuario-informacion-dato">
          <span class="dato-title">Numero de Celular</span>
          <span class="dato-value"></span>
        </div>
        
      </div>
    </section>
  `

  return $mian
}