# Contributing

Thanks for contributing! A short guide to get you started.

1. Fork the repository and create a topic branch from `main`:

```bash
git checkout -b feat/your-feature
```

2. Install dependencies and run the dev server locally:

```bash
npm install
npm run dev
```

3. Lint and type-check before opening a PR:

```bash
npm run lint
npx tsc --noEmit
```

4. Open a pull request against `main`. The repository requires CI to pass before merging.

5. If your PR introduces breaking API changes, mention them in the PR description and update the README.

Tips:
- Keep changes small and focused.
- Run `npm run lint` and fix issues locally; the CI will run the same checks.
