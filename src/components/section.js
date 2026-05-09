export function Section({ id, contenido }) {
    const section = document.createElement('section');
    section.id = id;
    section.classList.add('content-section');
    section.innerHTML = contenido;

    const style = document.createElement('style');
    style.textContent = `
    .content-section {
      padding: 5rem 3rem;
      max-width: 900px;
      margin: 0 auto;
      font-family: sans-serif;
    }
    .content-section h2 {
      font-size: 2rem;
      color: #1a2a4a;
      font-family: Georgia, serif;
      margin-bottom: 1.2rem;
      padding-bottom: 0.6rem;
      border-bottom: 2px solid #c9a84c;
    }
    .content-section p {
      color: #555;
      line-height: 1.8;
      margin-bottom: 1rem;
      font-size: 1.05rem;
    }
    .content-section ul {
      list-style: none;
      padding: 0;
      margin-top: 1rem;
    }
    .content-section ul li {
      padding: 0.8rem 0;
      color: #444;
      border-bottom: 1px solid #eee;
      font-size: 1rem;
    }
    .content-section ul li::before {
      content: "⚖️ ";
    }
    .content-section .cta-button {
      display: inline-block;
      margin-top: 2rem;
      padding: 0.85rem 2.5rem;
      background: #1a2a4a;
      color: #fff;
      text-decoration: none;
      border-radius: 4px;
      font-size: 1rem;
      letter-spacing: 0.5px;
      transition: background 0.2s;
    }
    .content-section .cta-button:hover {
      background: #c9a84c;
    }
    .content-section form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 520px;
      margin-top: 1.5rem;
    }
    .content-section input,
    .content-section textarea {
      padding: 0.85rem 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
      font-family: sans-serif;
      transition: border 0.2s;
    }
    .content-section input:focus,
    .content-section textarea:focus {
      outline: none;
      border-color: #1a2a4a;
    }
    .content-section textarea {
      min-height: 130px;
      resize: vertical;
    }
    .content-section button[type="submit"] {
      padding: 0.85rem;
      background: #1a2a4a;
      color: #fff;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      letter-spacing: 0.5px;
      transition: background 0.2s;
    }
    .content-section button[type="submit"]:hover {
      background: #c9a84c;
    }
  `;

    section.appendChild(style);
    return section;
}