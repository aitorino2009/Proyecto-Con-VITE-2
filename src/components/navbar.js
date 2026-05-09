export function Navbar() {
    const nav = document.createElement('nav');
    nav.classList.add('navbar');

    nav.innerHTML = `
    <div class="logo">
      <span class="logo-icon">⚖️</span>
      <span class="logo-text">Procurador Tomás</span>
    </div>
    <ul class="nav-links">
      <li><a href="#inicio">Inicio</a></li>
      <li><a href="#servicios">Servicios</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
    <div class="botonBurguer">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
  `;

    const style = document.createElement('style');
    style.textContent = `
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.2rem 3rem;
      background: #1a2a4a;
      color: #fff;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 2px 12px rgba(0,0,0,0.4);
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-family: Georgia, serif;
      font-size: 1.4rem;
      font-weight: bold;
      letter-spacing: 0.5px;
    }
    .nav-links {
      list-style: none;
      display: flex;
      gap: 2.5rem;
      margin: 0;
      padding: 0;
    }
    .nav-links a {
      color: #fff;
      text-decoration: none;
      font-family: sans-serif;
      font-size: 0.95rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: color 0.2s;
    }
    .nav-links a:hover {
      color: #c9a84c;
    }
    .botonBurguer {
      display: none;
      flex-direction: column;
      cursor: pointer;
      gap: 5px;
    }
    .bar {
      height: 3px;
      width: 25px;
      background: #fff;
      border-radius: 2px;
      transition: 0.3s;
    }
    @media (max-width: 768px) {
      .navbar { flex-wrap: wrap; padding: 1rem 1.5rem; }
      .nav-links {
        display: none;
        flex-direction: column;
        width: 100%;
        text-align: center;
        padding: 1rem 0;
        gap: 1.2rem;
      }
      .nav-links.active { display: flex; }
      .botonBurguer { display: flex; }
    }
  `;

    nav.appendChild(style);

    nav.querySelector('.botonBurguer').addEventListener('click', () => {
        nav.querySelector('.nav-links').classList.toggle('active');
    });

    return nav;
}