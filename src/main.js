import './styles/style.css';
import { Navbar } from './components/navbar.js';

const app = document.querySelector('#app');
app.innerHTML = '';

// --- NAVBAR ---
app.append(Navbar());

// --- HERO ---
const hero = document.createElement('section');
hero.id = 'inicio';
hero.className = 'hero';
hero.innerHTML = `
  <div class="hero-text">
    <p class="hero-pretitle">Colegiado nº 1482 · Baleares</p>
    <h1 class="hero-title">Representación procesal a su medida</h1>
    <p class="hero-lead">
      Soy Tomás, procurador de los tribunales con más de quince años de ejercicio activo. 
      Me encargo de que cada escrito se presente a tiempo, cada notificación se traslada el mismo día 
      y cada expediente avanza sin fricciones.
    </p>
    <div class="hero-buttons">
      <a href="#contacto" class="btn-primary">Solicitar representación</a>
      <a href="#servicios" class="btn-ghost">Ver servicios</a>
    </div>
  </div>
  <div class="hero-image">
    <img src="/procurador-hero.jpg" alt="Despacho de Tomás, Procurador de los Tribunales" />
  </div>
`;
app.append(hero);

// --- STATS BAR ---
const statsBar = document.createElement('div');
statsBar.className = 'stats-bar';
statsBar.innerHTML = `
  <div class="stat">
    <div class="stat-num">+1.800</div>
    <div class="stat-label">Expedientes gestionados</div>
  </div>
  <div class="stat">
    <div class="stat-num">15 años</div>
    <div class="stat-label">De ejercicio procesal activo</div>
  </div>
  <div class="stat">
    <div class="stat-num">5 partidos</div>
    <div class="stat-label">Judiciales de cobertura</div>
  </div>
`;
app.append(statsBar);

// --- SERVICIOS ---
const services = document.createElement('section');
services.id = 'servicios';
services.className = 'section section--grey';
services.innerHTML = `
  <div class="section-header">
    <p class="section-label">Áreas de actuación</p>
    <h2 class="section-title">Servicios de procura</h2>
    <p class="section-lead">
      Representación técnica en todos los órdenes jurisdiccionales, 
      con seguimiento riguroso de cada procedimiento.
    </p>
  </div>

  <div class="services-grid">
    <div class="service-item">
      <div class="service-line"></div>
      <p class="service-area">Civil y Mercantil</p>
      <h3 class="service-title">Procedimientos civiles</h3>
      <p class="service-desc">Juicios ordinarios y verbales, procesos monitorios y cambiarios, ejecuciones de títulos judiciales y extrajudiciales.</p>
    </div>

    <div class="service-item">
      <div class="service-line"></div>
      <p class="service-area">Familia y Sucesiones</p>
      <h3 class="service-title">Derecho de familia</h3>
      <p class="service-desc">Divorcios, custodias, liquidación de gananciales, herencias y procedimientos de incapacitación.</p>
    </div>

    <div class="service-item">
      <div class="service-line"></div>
      <p class="service-area">Laboral y Social</p>
      <h3 class="service-title">Jurisdicción social</h3>
      <p class="service-desc">Reclamaciones de cantidad, despidos, incapacidades y recursos de suplicación ante el TSJ.</p>
    </div>

    <div class="service-item">
      <div class="service-line"></div>
      <p class="service-area">Contencioso-Administrativo</p>
      <h3 class="service-title">Frente a la Administración</h3>
      <p class="service-desc">Procedimientos abreviados y ordinarios, sanciones y reclamaciones frente a la Administración Pública.</p>
    </div>

    <div class="service-item">
      <div class="service-line"></div>
      <p class="service-area">Ejecución Procesal</p>
      <h3 class="service-title">Ejecuciones y embargos</h3>
      <p class="service-desc">Averiguación patrimonial vía Punto Neutro Judicial, embargos telemáticos y gestión de subastas electrónicas.</p>
    </div>

    <div class="service-item">
      <div class="service-line"></div>
      <p class="service-area">Económico Procesal</p>
      <h3 class="service-title">Tasación de costas</h3>
      <p class="service-desc">Elaboración de minutas conforme a aranceles, tasaciones de costas, impugnaciones y jura de cuentas.</p>
    </div>
  </div>
`;
app.append(services);

// --- MÉTODO ---
const method = document.createElement('section');
method.id = 'metodo';
method.className = 'section section--navy';
method.innerHTML = `
  <div class="section-header">
    <p class="section-label">Cómo trabajo</p>
    <h2 class="section-title">Proceso claro y sin intermediarios</h2>
    <p class="section-lead">
      Cada encargo sigue el mismo protocolo, diseñado para que usted 
      esté informado en todo momento y los plazos nunca fallen.
    </p>
  </div>

  <div class="steps-grid">
    <div class="step">
      <p class="step-num">01</p>
      <h3 class="step-title">Poder y encomienda</h3>
      <p class="step-desc">Apoderamiento apud acta por sede electrónica sin coste adicional. Apertura de expediente en el mismo día de la encomienda.</p>
    </div>

    <div class="step">
      <p class="step-num">02</p>
      <h3 class="step-title">Presentación LexNet</h3>
      <p class="step-desc">Revisión formal y registro telemático de escritos en menos de 24 horas, con remisión del acuse oficial de recepción.</p>
    </div>

    <div class="step">
      <p class="step-num">03</p>
      <h3 class="step-title">Traslado de notificaciones</h3>
      <p class="step-desc">Comunicación al letrado el mismo día de cada resolución recibida, con indicación expresa del plazo para actuar.</p>
    </div>

    <div class="step">
      <p class="step-num">04</p>
      <h3 class="step-title">Impulso y cierre</h3>
      <p class="step-desc">Asistencia a vistas, diligenciado de exhortos y elaboración de la tasación de costas para cerrar el expediente.</p>
    </div>
  </div>
`;
app.append(method);

// --- CONTACTO ---
const contact = document.createElement('section');
contact.id = 'contacto';
contact.className = 'section';
contact.innerHTML = `
  <div class="section-header">
    <p class="section-label">Contacto</p>
    <h2 class="section-title">Hablemos de su asunto</h2>
  </div>

  <div class="contact-layout">
    <div class="contact-info">
      <h3>Despacho profesional</h3>
      <p>
        Atiendo directamente tanto a letrados y despachos de abogados 
        como a particulares y empresas. Escríbame o llámeme para cualquier 
        consulta procesal, incluidas las urgentes.
      </p>

      <div class="contact-detail-list">
        <div class="contact-detail">
          <span class="contact-detail-label">Teléfono</span>
          <span class="contact-detail-value">+34 971 22 33 44</span>
        </div>
        <div class="contact-detail">
          <span class="contact-detail-label">Urgencias procesales</span>
          <span class="contact-detail-value">+34 622 33 44 55</span>
        </div>
        <div class="contact-detail">
          <span class="contact-detail-label">Correo electrónico</span>
          <span class="contact-detail-value">tomas@procurador.es</span>
        </div>
        <div class="contact-detail">
          <span class="contact-detail-label">Sede</span>
          <span class="contact-detail-value">C/ Vía Roma, 14, 2.ª A — Palma</span>
        </div>
        <div class="contact-detail">
          <span class="contact-detail-label">Horario</span>
          <span class="contact-detail-value">L–V de 8:30 a 14:30 y de 17:00 a 19:30</span>
        </div>
      </div>

      <div class="contact-partidos">
        <p class="contact-partidos-label">Partidos judiciales</p>
        <div class="partidos-tags">
          <span class="partido-tag">Palma de Mallorca</span>
          <span class="partido-tag">Inca</span>
          <span class="partido-tag">Manacor</span>
          <span class="partido-tag">Eivissa</span>
          <span class="partido-tag">Maó</span>
        </div>
      </div>
    </div>

    <div class="contact-form">
      <p class="form-title">Formulario de consulta</p>
      <p class="form-subtitle">Le responderemos en menos de 24 horas.</p>

      <form id="procura-form">
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="nombre">Nombre y apellidos</label>
            <input type="text" id="nombre" class="form-input" placeholder="Laura García López" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="telefono">Teléfono</label>
            <input type="tel" id="telefono" class="form-input" placeholder="612 345 678" required />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="email">Correo electrónico</label>
          <input type="email" id="email" class="form-input" placeholder="contacto@despacho.com" required />
        </div>

        <div class="form-group">
          <label class="form-label" for="tipo">Tipo de asunto</label>
          <select id="tipo" class="form-select">
            <option value="Civil y Mercantil">Civil y Mercantil</option>
            <option value="Familia y Sucesiones">Familia y Sucesiones</option>
            <option value="Laboral y Social">Laboral y Social</option>
            <option value="Contencioso-Administrativo">Contencioso-Administrativo</option>
            <option value="Ejecución procesal">Ejecución y embargos</option>
            <option value="Tasación de costas">Tasación de costas</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label" for="mensaje">Descripción del asunto</label>
          <textarea id="mensaje" class="form-textarea" placeholder="Indique el tribunal, número de autos o un breve resumen del trámite requerido."></textarea>
        </div>

        <label class="form-privacy">
          <input type="checkbox" required />
          Acepto la política de privacidad y el tratamiento de mis datos para la gestión de la consulta.
        </label>

        <button type="submit" class="btn-submit">Enviar consulta</button>
      </form>
    </div>
  </div>

  <!-- Modal confirmación -->
  <div class="modal-overlay" id="modal">
    <div class="modal-box">
      <div class="modal-check">✓</div>
      <h3 class="modal-title">Consulta recibida</h3>
      <p class="modal-text">Gracias por ponerse en contacto. Revisaremos su caso y le responderemos en menos de 24 horas.</p>
      <p class="modal-ref" id="modal-ref">REF: PROC-2026-0000</p>
      <button type="button" class="btn-modal-close" id="modal-close">Aceptar</button>
    </div>
  </div>
`;
app.append(contact);

// --- FOOTER ---
const footer = document.createElement('footer');
footer.className = 'footer';
footer.innerHTML = `
  <div class="footer-grid">
    <div>
      <p class="footer-brand-name">Tomás — Procurador de los Tribunales</p>
      <p class="footer-brand-desc">
        Despacho especializado en representación procesal ante juzgados y tribunales de Baleares. 
        Colegiado nº 1482 del Ilustre Colegio de Procuradores.
      </p>
    </div>

    <div>
      <p class="footer-col-title">Navegación</p>
      <ul class="footer-col-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#metodo">Método de trabajo</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </div>

    <div>
      <p class="footer-col-title">Áreas</p>
      <ul class="footer-col-links">
        <li><a href="#servicios">Civil y Mercantil</a></li>
        <li><a href="#servicios">Familia</a></li>
        <li><a href="#servicios">Laboral</a></li>
        <li><a href="#servicios">Contencioso</a></li>
        <li><a href="#servicios">Ejecuciones</a></li>
      </ul>
    </div>

    <div>
      <p class="footer-col-title">Contacto</p>
      <ul class="footer-col-links">
        <li><span>+34 971 22 33 44</span></li>
        <li><span>tomas@procurador.es</span></li>
        <li><span>C/ Vía Roma, 14, 2.ª A — Palma</span></li>
        <li><span>LexNet operativo 24 h</span></li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <span>© ${new Date().getFullYear()} Tomás — Procurador de los Tribunales. Col. nº 1482.</span>
    <span>Aviso legal · Política de privacidad</span>
  </div>
`;
app.append(footer);

// --- LÓGICA DEL FORMULARIO ---
const form = document.querySelector('#procura-form');
const modal = document.querySelector('#modal');
const modalClose = document.querySelector('#modal-close');
const modalRef = document.querySelector('#modal-ref');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const ref = `PROC-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
  if (modalRef) modalRef.textContent = `REF: ${ref}`;
  modal.classList.add('active');
  form.reset();
});

modalClose.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });