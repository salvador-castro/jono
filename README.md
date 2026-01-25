# 🌊 Jono Buceo - Landing Page

Bienvenido al repositorio del proyecto oficial de **Jono Buceo**. Esta es una Landing Page moderna y responsiva diseñada para promocionar cursos de buceo y experiencias subacuáticas.

![Jono Buceo Preview](/public/logo/logo.jpg)

## 🚀 Características

- **Diseño Moderno y Responsivo**: Adaptable a dispositivos móviles, tablets y escritorio.
- **Hero Section Dinámica**:
  - Video de fondo horizontal para escritorio.
  - Video vertical optimizado para móviles con cambio automático.
- **Menú de Navegación**:
  - Barra de navegación adhesiva (sticky).
  - Menú hamburguesa animado para versiones móviles.
- **Secciones Informativas**:
  - **Instructores**: Presentación del equipo con tarjetas de perfil.
  - **Cursos**: Listado de ofertas con descripciones y precios.
- **Formulario de Contacto Funcional**:
  - Integración con **FormSubmit** para envío de emails sin backend.
  - Validaciones en tiempo real (email, teléfono numérico).
  - Feedback visual de estado (Cargando, Éxito, Error).
- **Footer Multimedia**:
  - Video de fondo con superposición (overlay) para legibilidad.
  - Enlaces a redes sociales y créditos del desarrollador.

## 🛠️ Tecnologías Utilizadas

- **React** (v19)
- **Vite** (para un entorno de desarrollo rápido)
- **CSS3** (Variables CSS, Flexbox, Media Queries, Animaciones)
- **HTML5** (Semántico)

## 📦 Instalación y Uso

Sigue estos pasos para correr el proyecto localmente:

1.  **Clonar el repositorio**:
    ```bash
    git clone https://github.com/salvador-castro/jono.git
    cd jono
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Ejecutar el servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    El sitio estará disponible en `http://localhost:5173`.

4.  **Construir para producción**:
    ```bash
    npm run build
    ```

## 📂 Estructura del Proyecto

```
jono/
├── public/              # Recursos públicos (imágenes, videos)
│   ├── cursos/          # Imágenes de cursos
│   ├── instructores/    # Fotos de instructores
│   ├── logo/            # Logo del sitio
│   └── videos/          # Videos de fondo (Hero, Footer)
├── src/
│   ├── assets/          # Recursos importados (imágenes, iconos)
│   ├── components/      # Componentes de React (Navbar, Hero, About, etc.)
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales y variables
└── index.html           # HTML base
```

## 👨‍💻 Créditos

Desarrollado por **[Salva Castro](https://salvadorcastro.vercel.app/)**.

---
&copy; 2026 Jono Buceo. Todos los derechos reservados.
