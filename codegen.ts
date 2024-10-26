import type { CodegenConfig } from '@graphql-codegen/cli';
import { env } from './src/infra/config';

const schema = env.SERVER_ENDPOINT;

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
