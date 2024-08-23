import type { CodegenConfig } from '@graphql-codegen/cli';

const schema =
  process.env.VITE_APP_ENDPOINT || 'https://scheduller.onrender.com/graphql';
// console.log({ schema, env: process.env })

const config: CodegenConfig = {
  overwrite: true,
  schema,
  documents: [
    'src/graphql/queries/*.graphql',
    'src/graphql/mutations/*.graphql',
  ],
  generates: {
    'src/graphql/generated/': {
      preset: 'client',
      config: {
        withCompositionFunctions: true,
        dedupeFragments: true,
        useTypeImports: true,
        addDocBlocks: true,
        skipTypename: true,
      },
      plugins: [{ add: { content: '// @ts-nocheck' } }],
    },
    // "src/graphql/generated/schema.json": {
    //   plugins: ["introspection"],
    // },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
};

export default config;
