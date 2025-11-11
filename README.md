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

## Troubleshooting

If the dev server fails to start, check Node version and that dependencies installed cleanly.

---

If you'd like, I can now:

- install dependencies and start the dev server here
- run `npx shadcn-ui init` and scaffold a few UI components
- add an example shadcn Button wired into the Header

Tell me which of the above you'd like me to do next.
