import type { KnipConfig } from "knip";

export default {
  workspaces: {
    "."           : {},
    "apps/desktop": {
      svelte: {
        config: ["svelte.config.ts"],
      },
    },
  },
} satisfies KnipConfig;
