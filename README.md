# 2_Proyecto_Vite_2

> [!NOTE]  
> Proyecto desarrollado en el módulo de FP APOF como práctica de **Vite** y componentes JavaScript.

La tarea: crear y actualizar la web de [Procurador Tomás](https://www.procuradortomas.com/) usando una arquitectura de componentes.

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
│   └─ icons.svg
└─ src/
    ├─ main.js
    ├─ assets/
    │   └─ hero.png
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

## 🧩 Componentes

### `Navbar`
Componente de navegación con logo, links y menú burger para móvil. Incluye sus estilos encapsulados.

### `Section`
Componente reutilizable que recibe dos props:
- `id` → identificador único de la sección
- `contenido` → HTML que mostrará la sección

---

## 🌿 Ramas

|        Rama        |                 Descripción                    |
|--------------------|------------------------------------------------|
| `main`             | Código estable y en producción                 |
| `feat/componentes` | Desarrollo de los componentes Navbar y Section |

---

## 👤 Autor

Desarrollado por **Aitor Portales Crespí**
