# curriculum_nuevo

> Proyecto de Gonanf — colección personal.
> **Lenguaje principal (GitHub):** TypeScript · **URL:** https://github.com/Gonanf/curriculum_nuevo

## Qué es

Este repositorio forma parte de la colección de **Gonanf / Gabriel Solotorevsky** clonada en `/run/media/chaos/terciario/proyectos/curriculum_nuevo`.

> **Nota:** README original preservado abajo en la sección "README original".

- **Path absoluto:** `/run/media/chaos/terciario/proyectos/curriculum_nuevo`
- **Estado git:** último commit `2025-12-16 fix(a)`
- **Archivos (aprox):** 92
- **Stack detectado:** Node.js / TypeScript (package.json) deps: @cloudflare/vite-plugin, @eslint/js, @radix-ui/react-slot, @tailwindcss/vite, @tanstack/react-router, Vite

## Stack

- Node.js / TypeScript (package.json) deps: @cloudflare/vite-plugin, @eslint/js, @radix-ui/react-slot, @tailwindcss/vite, @tanstack/react-router
- Vite

## Estructura

```
curriculum_nuevo/
.wrangler/
  .wrangler/deploy
README.md
bun.lock
components.json
eslint.config.js
index.html
package.json
public/
  public/InBug-White.png
  public/arch-linux.png
  public/cloudflare.png
  public/cpp.png
  public/css.png
  public/escuela.png
  public/git.png
  public/github-mark.png
src/
  src/assets
  src/components
```

## Cómo correr

> Instrucciones genéricas según el stack detectado. Ajustar según el repo.

```bash
# instalar deps
bun install   # o npm install / pnpm install

# desarrollo
bun run dev   # o npm run dev

# build
bun run build
```

## Estado

- **Último commit:** `2025-12-16 fix(a)`
- **Clonado en:** `/run/media/chaos/terciario/proyectos/curriculum_nuevo`
- **Exclusiones del lote:** Forks, Workmatch, el-hornero-digital, mali/meli, Sherut (no tocados por consigna)

## Docs

- `docs/overview.md` — descripción extendida y guía rápida (generado en este lote)

## README original (preservado)

> Contenido previo de README.md recortado a 2000 chars para referencia:

```markdown
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom
```

---
*README generado/mejorado automáticamente el 2026-09-04 con inspección de repo (opencode/agy pattern: lectura de estructura, lenguaje y entrypoints). No se modificó código, solo documentación.*
*Autor original: Gonanf — https://github.com/Gonanf/curriculum_nuevo*
