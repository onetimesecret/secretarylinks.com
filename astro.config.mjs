import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Spotnote: optional, dev-only UI feedback for coding agents.
//
// Click an element on the dev server, write what should change, and the agent
// gets its exact file, line and column. The plugin stamps
// data-spotnote="file:line:col" on elements in .astro files and injects a
// picker (launcher in the bottom-left corner). It does nothing in
// `astro build`, so the static output is unchanged.
// https://github.com/harukikuri/spotnote
//
// It is a devDependency, loaded only when installed: a --prod install, or
// removing the package, leaves this config working.
//
// MCP server (optional, once per machine) so a local agent picks up notes as
// you write them and can reply on them:
//
//   claude mcp add --scope user spotnote -- npx -y spotnote-mcp
//   codex mcp add spotnote -- npx -y spotnote-mcp
//
// Then ask the agent: "Watch my Spotnote notes." The server listens on
// 127.0.0.1:4848 only and saves notes in ~/.spotnote/. If the port is taken,
// set SPOTNOTE_PORT to the same free port for the agent and for `pnpm dev`.
// Without it, Enter copies the note as a prompt to paste instead.
const spotnote = await import('spotnote').then(
  (m) => m.default,
  () => null,
);

export default defineConfig({
  site: 'https://onetimesecretary.com',
  vite: {
    plugins: [tailwindcss(), spotnote?.()],
  },
});
