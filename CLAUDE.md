# CLAUDE.md

## Package manager

This project uses **pnpm**. Do not run `npm install`, `npm ci`, or `yarn` — they will desync `pnpm-lock.yaml`.

- Install deps: `pnpm install`
- Add a dep: `pnpm add <pkg>` (use `-D` for devDependencies)
- Run a script: `pnpm <script>` (e.g. `pnpm dev`, `pnpm build`)
- CI: `pnpm install --frozen-lockfile`
