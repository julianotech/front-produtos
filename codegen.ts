import type { CodegenConfig } from '@graphql-codegen/cli';
// console.log({env: process.env })

const schema = process.env.VITE_APP_ENDPOINT || 'http://0.0.0.0:30000/graphql';
// console.log({ schema, env: process.env })

const config: CodegenConfig = {
  overwrite: true,
  schema,
  documents: ['src/graphql/modules/**/*.graphql'],
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
    'modules/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.gql.ts',
        baseTypesPath: 'src/graphql/modules',
      },
      config: {
        useTypeImports: true,
        skipTypename: true,
      },
      plugins: ['typescript-operations', 'typed-document-node'],
    },
  },

  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
};

export default config;
