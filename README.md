# Pink Point

Sitio personal y portfolio profesional de Michael Ponce, enfocado en arquitectura backend, bases de datos, automatización con Azure DevOps y desarrollo mobile.

## Descripción

Pink Point es una web construida con Astro y Tailwind CSS para presentar:

- Perfil profesional y experiencia
- Servicios de consultoría y desarrollo
- Portfolio de aplicaciones Android
- Blog técnico con contenido de backend, SQL y DevOps
- Información de contacto y perfil CV

## Stack principal

- Astro
- React (componentes interactivos)
- Tailwind CSS
- TypeScript
- Lucide React
- Content Collections de Astro

## Requisitos

- Node.js >= 22.12.0
- npm

## Instalación

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación queda disponible normalmente en http://localhost:4321.

## Construir para producción

```bash
npm run build
```

## Vista previa de producción

```bash
npm run preview
```

## Estructura del proyecto

```text
src/
  components/     Componentes de la interfaz
  content/        Contenido de blog y aplicaciones
  layout/         Layout principal y widgets
  pages/          Páginas del sitio
  styles/         Estilos globales
public/           Archivos estáticos
```

## Contenido

El contenido principal de la web se gestiona en `src/content/`:

- `src/content/blog/`: artículos del blog
- `src/content/apps/`: aplicaciones destacadas con enlaces a Google Play

Cada entrada usa frontmatter con información como título, descripción, fecha y etiquetas.

## Personalización

Para actualizar información del perfil o servicios, revisa los componentes ubicados en `src/components/` y las páginas de `src/pages/`.

## Licencia

Este proyecto es de uso personal y de portfolio. Consulta los archivos legales y condiciones de uso si los necesitas en el sitio.
