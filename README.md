# 🚀 React CV Professional

Este proyecto es una demostración práctica del uso de **React** para la creación de interfaces modulares, dinámicas y profesionales. Diseñado originalmente como un currículum interactivo, el sistema permite gestionar contenido bilingüe y generar documentos PDF de alta calidad directamente desde el navegador, conservando imagenes y enlaces para la navegación.

## 🌟 Características Principales

-   **Arquitectura Modular**: Componentes de React son reutilizables y limpios (`Header`, `Experience`, `Projects`, etc.).

-   **Data-Driven (JSON as an API)**: Todo el contenido reside en archivos JSON (`cvData_es.json` y `cvData_en.json`) que actúan como una API local, permitiendo actualizaciones de contenido sin tocar la lógica del código.

-   **Multilenguaje**: Soporte nativo para cambio de idioma (Español/Inglés) con un solo clic.

-   **Bootstrap 5**: Estructura responsiva y modular, ideal para componentes reutilizables.

-   **Framer Motion**: Animaciones fluidas, *scroll-revels* y micro-interacciones que elevan la UX.

-   **PDF Export Ready**: Optmizado con estilos CSS `@media print` para exportar un CV de dos columnas perfectamente alineado y profesional.

## 🛠️ Tech Stack

-   [React 19](https://react.dev/) - Biblioteca principal.
-   [Vite](https://vitejs.dev/) - Build tool ultra rápido.
-   [Bootstrap 5](https://getbootstrap.com/) - Framework de estilos.
-   [Framer Motion](https://www.framer.com/motion/) - Motor de animaciones.

## 🚀 Instalación y Uso

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/cuackzoide/react-cv.git
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    ```
3. Modifica el archivo `cvData_es.json` o `cvData_en.json` para actualizar con tu contenido.

4. Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```
5. Abre el navegador y ve a `http://localhost:5173` (premeditado por vite) para ver tu cv interactivo.

## 📄 Exportación a PDF

Para obtener tu CV en formato PDF:
1.  Selecciona el idioma deseado en la aplicación.
2.  Presiona `Ctrl + P`.
3.  Asegúrate de activar la opción **"Gráficos de fondo"** en los ajustes de impresión para conservar los colores y estilos premium.

---
Proyecto desarrollado para demostrar habilidades de desarrollo Frontend y manejo de estado en React.

