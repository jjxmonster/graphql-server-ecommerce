import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";

const config = {
  overwrite: true,
  schema: "./src/schema/**/*.graphql",
  generates: {
    "src/graphql/": defineConfig({
      typesPluginsConfig: {
        optionalInfoArgument: true,
      },
      scalarsOverrides: {
        ID: {
          type: "string",
        },
      },
    }),
  },
  hooks: {
    afterAllFileWrite: ["pnpm prettier --write"],
  },
} satisfies CodegenConfig;

export default config;
