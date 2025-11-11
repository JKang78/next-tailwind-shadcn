# Next + Tailwind + shadcn Starter

This repository is a minimal skeleton to start a Next.js app using the App Router, Tailwind CSS and shadcn/ui (Radix + Tailwind-based component system).

## What's included

- Next.js (App Router) + TypeScript scaffold
- Tailwind CSS configured (tailwind.config.cjs + postcss.config.cjs)
- Basic `src/app` layout and `page.tsx`
- Simple `Header` and `Footer` components

## Requirements

- Node.js 18+ (recommended)
- npm or yarn
- macOS (zsh) instructions shown below

## Quick start (macOS / zsh)

1. Install dependencies

```bash
# using npm
npm install

# or using yarn
# yarn
```

2. Run the dev server

```bash
npm run dev
```

3. Open http://localhost:3000

## Add Tailwind (already configured)
The project already includes Tailwind config files. If you need to re-init Tailwind:

```bash
npx tailwindcss init -p
```

## Install shadcn/ui (optional manual steps)
shadcn provides a component library scaffold that integrates with Tailwind and Radix UI. To add it:

```bash
# install peer deps
npm install clsx tailwind-merge @radix-ui/react-primitive
# follow shadcn's guide to run the generator
npx shadcn-ui init
npx shadcn-ui add button input
```

After running the generator, you can import components from `src/components/ui` or where the generator places them.

## Next steps

- Add site metadata and favicon
- Run `npx shadcn-ui init` to scaffold shadcn components
- Add unit tests or Storybook if desired

## Development & contributor guide

Recommended local workflow (macOS / zsh):

1. Clone the repo and install dependencies:

```bash
git clone https://github.com/JKang78/next-tailwind-shadcn.git
cd next-tailwind-shadcn
npm install
```

2. Run the dev server:

```bash
npm run dev
```

3. Before opening a PR run the checks:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

4. Open a pull request against `main`. The repository uses CI to run lint and build, so ensure local checks pass first.

5. If you want to invite a coworker to the repo, run (replace USERNAME):

```bash
gh repo add-collaborator JKang78/next-tailwind-shadcn --user USERNAME
```

6. Branch naming / PR guidelines:

- Use short, descriptive branch names like `feat/article-list` or `fix/header-style`.
- Write a clear PR description and include the steps to reproduce, screenshots, and any migration notes.

## Deployment

This project is ready to deploy on Vercel. To deploy:

1. Import the GitHub repository into Vercel and follow the setup flow (Vercel will detect Next.js).
2. Ensure environment variables (if any) are added in the Vercel dashboard.

## Contributing

See `CONTRIBUTING.md` for more details on how to contribute.

---

If you'd like, I can also add a PR template and ISSUE templates to guide contributors — I already added a small PR template in `.github/PULL_REQUEST_TEMPLATE.md`.

## Troubleshooting

If the dev server fails to start, check Node version and that dependencies installed cleanly.

---

If you'd like, I can now:

- install dependencies and start the dev server here
- run `npx shadcn-ui init` and scaffold a few UI components
- add an example shadcn Button wired into the Header

Tell me which of the above you'd like me to do next.
