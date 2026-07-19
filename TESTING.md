# Testing

Automated tests protect the consent, analytics, and fortune calculation paths that affect user trust and ad operations.

## Framework

- Vitest 3
- Node environment
- Tests live under `tests/` and use `*.test.ts`

## Commands

- `npm test` runs the full unit test suite once.
- `npm run build` runs the Next.js production compile and type checks.

## Expectations

- Add a focused test when changing exported calculation or consent behavior.
- Add a regression test with every bug fix.
- Cover both sides of new conditionals and visible error handling.
- Never commit a change that breaks existing tests or the production build.
