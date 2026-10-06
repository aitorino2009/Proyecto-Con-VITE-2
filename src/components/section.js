export function Section({ id, contenido, className = '' }) {
  const section = document.createElement('section');
  if (id) section.id = id;
  if (className) section.className = className;
  section.innerHTML = contenido;
  return section;
}