# Repository Guidelines

## Project Structure & Module Organization
Source lives under `src/`. Pages map to routes in `src/pages`, layouts reside in `src/layouts`, and reusable UI belongs in `src/components` (Astro `.astro` and React `.tsx`). Shared utilities sit in `src/lib`, while Tailwind layers and design tokens are authored in `src/styles`. Place static assets—favicons, fonts, and images—in `public/`. Keep global configuration centralized in `astro.config.mjs`, `tailwind.config.mjs`, and `tsconfig.json`.

## Build, Test, and Development Commands
Run `npm install` once to hydrate dependencies. Use `npm run dev` for a hot-reloading Astro server during feature work. Ship-ready bundles come from `npm run build`, and `npm run preview` serves that output locally for production parity. After adding routes or content collections, execute `npm run astro -- check` to refresh Astro’s metadata.

## Coding Style & Naming Conventions
Adopt 2-space indentation for `.astro`, `.ts`, and `.tsx`. Favor functional React components with PascalCase names and colocate module-specific styles. Astro page filenames mirror their URLs using lowercase kebab-case (`src/pages/about-us.astro`). Prefer Tailwind utility classes; promote shared variants into `src/styles` when reused. Keep imports sorted and prune unused exports before sending changes up.

## Testing Guidelines
Automated tests are not yet present. Before submitting, run `npm run build` and manually review critical flows (homepage, navigation, conversion forms) across mobile and desktop viewports. If you introduce automated tests, colocate them with the feature and document how to execute them.

## Commit & Pull Request Guidelines
Write commit messages in imperative Title Case (e.g., `Added Landing CTA Copy`). Group related code and assets into focused commits. Pull requests should cover a concise summary, linked issue or task, screenshots or GIFs for visual changes, reproduction or validation steps, and any configuration callouts. Request at least one review and confirm the preview build passes before merging.
