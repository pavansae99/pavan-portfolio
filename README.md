# Pavan Sai Lankalapalli - Portfolio

A responsive, recruiter-friendly engineering portfolio built with Next.js,
TypeScript, and Tailwind CSS. The site uses Next.js static export and deploys to
GitHub Pages with GitHub Actions.

**Live site:** [pavansae99.github.io/pavan-portfolio](https://pavansae99.github.io/pavan-portfolio/)

## Highlights

- Responsive single-page design with accessible navigation and reduced-motion support
- Typed, centralized portfolio content in `app/data.ts`
- SEO, Open Graph, sitemap, robots, web manifest, and structured profile data
- Fully static output with repository-aware GitHub Pages asset paths
- Automated lint, type-check, build, and deployment checks

## Local development

```bash
nvm use
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run quality
```

The static site is generated in `out/`.

## Deploy to GitHub Pages

1. Push the project to a GitHub repository using the `main` branch.
2. In the repository, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push a commit to `main` or run the workflow manually from the Actions tab.

The Next.js configuration automatically adds the repository `basePath` when the
workflow builds a project site such as `username.github.io/repository`.

## Personalize

Portfolio copy, skills, experience, project details, and contact links are
centralized in `app/data.ts`.
