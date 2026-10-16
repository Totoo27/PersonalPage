# Portfolio personal — Ignacio Diaz

Sitio estático hecho con [Astro](https://astro.build) y desplegado en GitHub Pages.
Sin frameworks de UI ni dependencias extra: HTML semántico, CSS con componentes de Astro y un script mínimo (`IntersectionObserver`) para las animaciones de entrada.

## Comandos

| Comando               | Acción                                              |
| :-------------------- | :-------------------------------------------------- |
| `npm install`         | Instala dependencias                                |
| `npm run dev`         | Servidor local (`http://localhost:4321/PersonalPage/`) |
| `npm run build`       | Genera el sitio en `dist/`                          |
| `npm run preview`     | Sirve el build localmente                           |
| `npm run check:todos` | Lista los datos pendientes de completar             |

## Estructura

```text
src/
├── data/site.ts        ← TODO el contenido (textos, proyectos, stack, niveles, enlaces)
├── layouts/Layout.astro← <head>, SEO, estilos globales
├── styles/global.css   ← variables de diseño y estilos base
├── components/         ← Header, Hero, Projects, About, Experience, Skills, Contact, Footer…
├── scripts/reveal.ts   ← animación de entrada (respeta prefers-reduced-motion)
└── assets/             ← imágenes (Astro las optimiza a WebP)
```

Para editar contenido casi nunca hace falta tocar componentes: cambiá `src/data/site.ts`.
Los campos `TODO('…')` se muestran resaltados en amarillo en el sitio hasta que los completes.

## Despliegue

`astro.config.mjs` define `site` y `base: '/PersonalPage/'`, y `.github/workflows/deploy.yml` publica en cada push a `main`
(en el repo: *Settings → Pages → Source: GitHub Actions*). Si cambiás el nombre del repo, actualizá `base`.
