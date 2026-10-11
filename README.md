# bernardo-xavier.github.io

Personal site and blog of Bernardo Xavier, full-stack engineer and data analyst in Toronto. It is built with [Astro](https://astro.build) and published to GitHub Pages at https://bernardo-xavier.github.io.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Add a post

Each post is a folder: `src/content/blog/<slug>/index.md`, with its images next to it. The front matter has `title`, `description`, `date`, `tags`, and optionally `cover`, `coverAlt` and `instagram`.

Posts come from the carousel pipeline in the `bx-motor-instagram` project:

```bash
python -m bx_carrossel.publicar_blog carrosseis/CNNN-topic
```

That command writes the post folder here. Review it with `npm run dev`, then commit and push. The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the site and publishes it.

## Design

The colours and fonts come from the Bernardo Xavier brand kit. The fonts are Inter, Inter Display and IBM Plex Mono, all under the SIL Open Font License; the licences are in `public/fonts/`.
