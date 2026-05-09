import './styles/style.css';
import { Navbar } from './components/navbar.js';
import { Section } from './components/section.js';

const app = document.body;

app.append(
    Navbar(),

    Section({
        id: 'inicio',
        contenido: `
      <h2>Bienvenida al sitio</h2>
      <p>
        Soy Tomás, procurador de los tribunales con amplia experiencia en representación
        procesal en toda clase de procedimientos judiciales.
      </p>
      <p>
        Mi compromiso es ofrecer un servicio profesional, cercano y eficiente,
        acompañándote en cada paso del proceso judicial.
      </p>
      <a class="cta-button" href="#contacto">Contactar ahora</a>
    `
    }),

    Section({
        id: 'servicios',
        contenido: `
      <h2>Nuestros servicios destacados</h2>
      <p>Ofrezco representación procesal en los siguientes ámbitos:</p>
      <ul>
        <li>Derecho civil y mercantil</li>
        <li>Derecho de familia (divorcios, custodias, herencias)</li>
        <li>Derecho laboral</li>
        <li>Procedimientos contencioso-administrativos</li>
        <li>Ejecuciones hipotecarias y embargos</li>
        <li>Jura de cuentas y tasación de costas</li>
      </ul>
    `
    }),

    Section({
        id: 'contacto',
        contenido: `
      <h2>Contacto y formulario de consulta</h2>
      <p>¿Tienes una consulta? Rellena el formulario y me pondré en contacto contigo.</p>
      <form onsubmit="event.preventDefault(); alert('Mensaje enviado. Gracias.')">
        <input type="text"  placeholder="Tu nombre"   required />
        <input type="email" placeholder="Tu email"    required />
        <input type="tel"   placeholder="Tu teléfono" />
        <textarea placeholder="Describe brevemente tu caso..."></textarea>
        <button type="submit">Enviar consulta</button>
      </form>
    `
    })
);