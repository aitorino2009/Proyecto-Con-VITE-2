export function Navbar() {
  const header = document.createElement('header');

  header.innerHTML = `
    <nav class="navbar" id="main-nav">
      <a href="#inicio" class="nav-logo">
        Tomás <span>· Procurador</span>
      </a>

      <ul class="nav-links" id="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#metodo">Método</a></li>
        <li><a href="#contacto" class="nav-cta">Contactar</a></li>
      </ul>

      <button class="burger" id="burger" aria-label="Menú">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  `;

  const burger = header.querySelector('#burger');
  const navLinks = header.querySelector('#nav-links');

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  return header;
}