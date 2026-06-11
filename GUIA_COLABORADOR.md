# Cómo hacer cambios en JonoBuceo

¡Hola Fer! Hice esta guía para que la tengas a mano y puedas hacer cambios en el sitio paso a paso: bajarte el código, probarlo en tu compu y subir tus modificaciones.

Como ya tenés conocimientos de Python, la consola y algunos conceptos te van a resultar familiares. Acá te detallo todo lo que necesitás para trabajar con el entorno de React/Node y Git.

---

## 🛠️ Paso 1: Requisitos Previos

Para poder levantar el proyecto, necesitás tener instaladas estas dos herramientas:

### 1. Git (Control de Versiones)
Si ya usás Git con Python, salteate esto. Si no, descargalo e instalalo:
* **Enlace**: Descargalo desde [git-scm.com](https://git-scm.com/).
* Para verificar si ya lo tenés, abrí una terminal y ejecutá:
  ```bash
  git --version
  ```

### 2. Node.js y npm (Para correr el sitio)
El sitio está hecho con **React** y **Vite**, así que necesita Node.js para ejecutarse de forma local.
* Descargá la versión **LTS** (la recomendada) desde [nodejs.org](https://nodejs.org/).
* Instalalo normalmente (esto te instala tanto `node` como `npm`).
* Verificá que haya quedado bien abriendo la terminal y ejecutando:
  ```bash
  node -v
  npm -v
  ```
  *(Debería mostrarte las versiones instaladas de cada uno).*

---

## 📥 Paso 2: Descargar el Proyecto (Clonar)

1. **Aceptar la invitación en GitHub**:
   Primero te voy a agregar como colaborador del repositorio. Te va a llegar un mail para que aceptes la invitación, o podés entrar directo al link del repositorio en GitHub para aceptarla.

2. **Clonar el repositorio**:
   Abrí la terminal, parate en la carpeta de tu compu donde quieras guardar el proyecto (por ejemplo, `cd Documents`) y ejecutá:
   ```bash
   git clone https://github.com/salvador-castro/jono.git
   ```

   > [!NOTE]
   > **¿Te pide iniciar sesión?**
   > Al clonar o al subir cambios por primera vez, Git te va a abrir automáticamente una ventana en el navegador para autenticarte. Simplemente hacé clic en **"Sign in with your browser"** (Iniciar sesión con tu navegador) y autorizá el acceso para que no te vuelva a pedir nada.

3. **Entrar a la carpeta**:
   ```bash
   cd jono
   ```
   *(Nota: La carpeta del repositorio clonado se llamará `jono`)*

---

## 🌿 Paso 3: Pararte en la rama de pruebas (Develop)

Para no tocar nada en producción directamente, **no vas a poder subir cambios a la rama principal (`main`)**. Todo lo vamos a trabajar sobre la rama `develop`.

1. Pasate a la rama `develop`:
   ```bash
   git checkout develop
   ```
2. Bajate los últimos cambios que estén en el servidor:
   ```bash
   git pull origin develop
   ```

---

## 🚀 Paso 4: Instalar todo y levantar el sitio localmente

1. **Instalar las dependencias**:
   Ejecutá este comando para descargar todas las librerías del proyecto (esto crea la carpeta `node_modules`):
   ```bash
   npm install
   ```

2. **Correr el sitio en tu compu**:
   Para ver la web en vivo mientras editás, ejecutá:
   ```bash
   npm run dev
   ```
   En la terminal te va a salir algo así:
   ```text
     VITE v7.2.4  ready in 300 ms

     ➜  Local:   http://localhost:5173/
   ```
3. Abrí tu navegador y entrá a **`http://localhost:5173/`**. Vas a ver el sitio funcionando. Cada vez que modifiques y guardes un archivo, la página se va a actualizar sola en el navegador para que veas cómo queda al instante.

---

## 🗺️ Paso 5: Mapa del Proyecto y Cómo Modificar Cada Sección

El sitio está estructurado en componentes independientes dentro de la carpeta `src/components/`. A continuación tenés un mapa detallado de qué hace cada archivo y cómo editarlo:

---

### 📂 1. Carpeta de archivos públicos (`public/`)
* **¿Qué hace?** Contiene todos los archivos estáticos: fotos, videos y el logo que usa el sitio web.
* **Estructura interna**:
  - `public/cursos/`: Imágenes de los cursos.
  - `public/instructores/`: Fotos de los instructores.
  - `public/logo/`: Logo de la marca.
  - `public/videos/`: Videos de fondo de la cabecera y el pie de página.
* **Cómo modificar o agregar**:
  - Cuando quieras agregar una foto o video nuevo, guardalo en la carpeta correspondiente.
  - **Regla de oro**: Usá nombres simples en minúscula y sin espacios (ejemplo: `mi-foto.jpg`).
  - Para usarlas en el código de React, usás la ruta directa a partir de la raíz (sin escribir `public`). Ejemplo: `/cursos/mi-foto.jpg` o `/videos/mi-video.mp4`.

---

### 📂 2. Barra de Navegación (`src/components/Navbar.jsx`)
* **¿Qué hace?** Muestra el logo y los botones para navegar por las distintas secciones del sitio.
* **Cómo modificar**:
  - **Logo**: El archivo está apuntando a `/logo/logo.jpg`. Si querés cambiar el logo, simplemente reemplazá ese archivo en la carpeta `public/logo/` manteniendo el nombre, o subí uno nuevo y cambiá el nombre en el código:
    ```javascript
    <img src="/logo/logo.jpg" alt="jonoBuceo" className="logo" />
    ```
  - **Textos de los enlaces**: En la lista `<ul>` que está al final del archivo podés cambiar lo que dice cada botón. Ejemplo:
    ```javascript
    <li className="nav-link" onClick={() => scrollToSection('home')}>Inicio</li>
    ```

---

### 📂 3. Pantalla de Bienvenida (`src/components/Hero.jsx`)
* **¿Qué hace?** Es la primera sección con la que se encuentra el usuario: título principal, subtítulo y video de fondo.
* **Cómo modificar**:
  - **Textos**: Modificá el título en `<h1>Explora el Mundo Submarino</h1>` o el subtítulo en `<p>...</p>`.
  - **Video de Fondo**: Si querés cambiar los videos, subí tus nuevos archivos `.mp4` a la carpeta `public/videos/` y actualizá los nombres en esta línea del código:
    ```javascript
    <source src={isMobile ? "/videos/mi-video-vertical.mp4" : "/videos/mi-video-horizontal.mp4"} type="video/mp4" />
    ```

---

### 📂 4. Instructores (`src/components/About.jsx`)
* **¿Qué hace?** Muestra la lista de instructores, sus roles y sus especialidades o certificaciones.
* **Cómo modificar, agregar o eliminar**:
  Al principio del archivo vas a encontrar una lista llamada `instructors`. Cada instructor está definido entre llaves `{}`:
  ```javascript
  const instructors = [
      {
          name: "Claudio Bravo",
          role: "Instructor técnico",
          certs: [
              "Intro to tech instructor",
              "Advanced nitrox instructor"
          ],
          image: "/instructores/instructor2.jpg"
      },
      // ... otro instructor
  ];
  ```
  - **Modificar**: Cambiá cualquier texto entre comillas (nombre, rol, foto).
  - **Editar certificaciones**: El campo `certs` es una lista. Podés cambiar los textos entre comillas, agregar una nueva línea separada por coma o borrar una certificación.
  - **Agregar un instructor**: Copiá un bloque completo de llaves (de `{` a `}`), agregá una coma `,` después del último instructor y pegalo. Recordá subir su foto a la carpeta `public/instructores/`.
  - **Borrar un instructor**: Seleccioná el bloque completo de llaves `{}` del instructor que querés quitar y borralo, asegurándote de que no queden comas de más.

---

### 📂 5. Listado de Cursos (`src/components/Courses.jsx`)
* **¿Qué hace?** Muestra las tarjetas con cada uno de los cursos que se ofrecen y los botones de consulta y reserva.
* **Cómo modificar, agregar o eliminar**:
  Funciona de manera muy similar a los instructores. Encontrás la lista `courses` arriba en el archivo:
  ```javascript
  const courses = [
      {
          title: "Bautismo",
          desc: "Descubrí el mundo subacuático...",
          price: "Consultar",
          image: "/cursos/course-bautismo.png"
      },
      // ... otros cursos
  ];
  ```
  - **Modificar**: Editá los textos dentro de las comillas.
  - **Agregar un curso nuevo**: Copiá un bloque `{ }` existente, agregá una coma `,` al final del elemento anterior y pegalo. Ejemplo:
    ```javascript
    }, // <-- Coma para separar del anterior
    {
        title: "Nuevo Curso TDI",
        desc: "Descripción de mi curso...",
        price: "Consultar",
        image: "/cursos/mi-curso-nuevo.png" // Foto en public/cursos/
    }
    ```
  - **Borrar un curso**: Borrá el bloque `{ }` del curso correspondiente junto con su coma.

---

### 📂 6. Formulario de Contacto y Mapa (`src/components/Contact.jsx`)
* **¿Qué hace?** Muestra el formulario donde los usuarios escriben sus consultas y un mapa interactivo de Google Maps.
* **Cómo modificar**:
  - **Correos a donde llegan las consultas**: Buscá la función `handleSubmit` en el archivo. El sitio usa un servicio llamado FormSubmit. Podés cambiar el mail principal y el mail en copia (CC) en esta parte:
    ```javascript
    const response = await fetch("https://formsubmit.co/ajax/jono.diving@gmail.com", {
        // ...
        body: JSON.stringify({
            ...formData,
            _cc: "salvacastro06@gmail.com" // Mail secundario de copia
        })
    ```
  - **Mapa de Google Maps**: En el bloque del mapa, vas a encontrar una etiqueta `<iframe>`. Si querés cambiar la ubicación del mapa, buscá la dirección en Google Maps, elegí "Compartir > Insertar un mapa" y copiá únicamente la URL que aparece en el atributo `src="..."`. Pegá esa URL reemplazando la actual en el archivo:
    ```javascript
    <iframe
        src="URL_DE_TU_NUEVO_MAPA_AQUÍ"
        // ... otras propiedades
    ></iframe>
    ```

---

### 📂 7. Pie de Página (`src/components/Footer.jsx`)
* **¿Qué hace?** Muestra el cierre inferior del sitio web, un video de fondo más tranquilo, redes sociales y créditos de desarrollo.
* **Cómo modificar**:
  - **Video de Fondo**: Cambiá la ruta en `<source src="/videos/footerJono.mp4" type="video/mp4" />` si querés poner otro video (recordá subirlo a `public/videos/`).
  - **Link de Instagram**: Podés actualizar el enlace a la cuenta en la etiqueta `<a>`:
    ```javascript
    <a href="https://www.instagram.com/jonobuceo/" ...
    ```

---

> [!WARNING]
> **Reglas críticas para editar el código (JSX)**
> Para que React no falle, siempre verificá que:
> 1. Todas las etiquetas HTML tengan su cierre (ej: si hay un `<div>` debe haber un `</div>`).
> 2. En las listas de instructores o cursos, cada elemento debe estar separado del otro por una coma `,`.
> 3. Todos los valores de texto estén envueltos en comillas simples o dobles (`"texto"` o `'texto'`).
> 4. Si la web deja de cargar y la terminal de `npm run dev` se llena de texto rojo, no te asustes: el mensaje te va a decir el archivo y el número de línea donde ocurrió el error de sintaxis para que lo corrijas.

---

## 📤 Paso 6: Guardar y subir tus cambios (Push)

Cuando ya veas que todo quedó genial en tu navegador (`http://localhost:5173/`), es momento de subir los cambios.

1. **Apagar el servidor local**:
   En la terminal, apretá `Ctrl + C` para detener el sitio de pruebas.

2. **Ver qué archivos tocaste**:
   ```bash
   git status
   ```
   *(Te van a salir en rojo los archivos que editaste o las imágenes nuevas que agregaste).*

3. **Preparar los archivos**:
   ```bash
   git add .
   ```

4. **Confirmar los cambios (Commit)**:
   ```bash
   git commit -m "Explicación breve de lo que cambiaste"
   ```

5. **Subir los cambios a la rama `develop`**:
   ```bash
   git push origin develop
   ```

> [!IMPORTANT]
> Acordate que **no podés subir cambios a `main` directamente** (`git push origin main` te va a dar error porque está bloqueado). Siempre subilos a `develop` (`git push origin develop`).

---

## 🔄 ¿Qué pasa después?
Una vez que subas tus cambios a `develop`, avisame. Yo me meto, reviso que todo esté en orden en la rama de pruebas y hago el merge a `main` para que los cambios se publiquen automáticamente en el sitio web real.

¡Cualquier duda que tengas escribime!
