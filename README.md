# 2_Proyecto_Vite_2

> [!NOTE]
> Proyecto desarrollado en el módulo de FP APOF como práctica de **Vite** y componentes JavaScript.

La tarea: crear y actualizar la web de [Procurador Tomás](https://www.procuradortomas.com/) usando una arquitectura de componentes.

El diseño se ha trabajado estudiando los **líderes del sector** (despachos de procuradores con mejor presencia digital en España) para conseguir una web que supere a la competencia: tipografía Inter, paleta azul marino + dorado, estructura limpia sin artificios y contenido directo al grano.

---

## 🗂️ Estructura del proyecto

```
2_Proyecto_Vite_2/
├─ index.html
├─ package.json
├─ package-lock.json
├─ .gitignore
├─ public/
│   ├─ favicon.svg
│   ├─ icons.svg
│   └─ procurador-hero.jpg
└─ src/
    ├─ main.js
    ├─ assets/
    │   ├─ hero.png
    │   └─ procurador-hero.jpg
    ├─ components/
    │   ├─ navbar.js
    │   └─ section.js
    └─ styles/
        └─ style.css
```

---

## 🚀 Instalación y uso

```bash
npm install
npm run dev
```

---

## 🎨 Decisiones de diseño

El rediseño se basa en el análisis de los mejores despachos de procuradores con presencia digital en España:

- **Tipografía** → Inter (la misma que usan los referentes del sector)
- **Paleta** → Azul marino `#1D2D3E` + dorado `#FECA5D`, sin degradados artificiales
- **Sin emojis** en el contenido de la web — transmiten poca seriedad jurídica
- **Hero de dos columnas** → texto a la izquierda, fotografía a la derecha
- **Hover invertido en servicios** → fondo negro al pasar el ratón, muy usado en webs legales premium
- **Franja de datos** en dorado, sobria y sin decoración excesiva

---

## 🧩 Componentes

### `Navbar`
Componente de navegación con logo de texto, links y menú burger para móvil. Sin estilos encapsulados — usa el sistema de diseño global de `style.css`.

### `Section`
Componente reutilizable que recibe dos props:
- `id` → identificador único de la sección
- `contenido` → HTML que mostrará la sección

---

## 📄 Secciones de la web

| Sección | Descripción |
|---------|-------------|
| Hero | Titular, presentación y fotografía del despacho |
| Stats | Tres métricas clave del despacho |
| Servicios | Cuadrícula de 6 áreas de actuación con hover |
| Método | Protocolo de trabajo en 4 pasos |
| Contacto | Información de contacto + formulario con modal de confirmación |
| Footer | Navegación, áreas, datos de contacto y aviso legal |

---

## 🌿 Ramas

|        Rama        |                 Descripción                    |
|--------------------|------------------------------------------------|
| `main`             | Código estable y en producción                 |
| `feat/componentes` | Desarrollo de los componentes Navbar y Section |

---

## 👤 Autor

Desarrollado por **Aitor Portales Crespí**
