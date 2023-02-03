import type { CodegenConfig } from '@graphql-codegen/cli';

const SERVER: string = process.env.GQL_SERVER!;
const SECRET: string = process.env.GQL_SERVER_ADMIN_SECRET!;

console.log('SERVER', SERVER);
console.log('SECRET', SECRET);

const config: CodegenConfig = {
  overwrite: true,
  emitLegacyCommonJSImports: false,
  schema: [
    {
      [SERVER]: {
        headers: {
          'x-hasura-admin-secret': SECRET,
        },
      },
    },
  ],
  documents: 'apollo/queries/*.graphql',
  generates: {
    './apollo/client.ts': {
      // preset: 'client',
      plugins: [
        { add: { content: '// THIS FILE IS GENERATED, DO NOT EDIT!' } },
        { add: { content: '/* tslint:disable */' } },
        { add: { content: '/* eslint-disable */' } },
        { add: { content: '// @ts-nocheck' } },
        'typescript',
        'typescript-operations',
        'typescript-vue-apollo',
        'typescript-apollo-client-helpers',
        'named-operations-object',
      ],
      config: {
        enumsAsTypes: true,
        withCompositionFunctions: true,
        vueApolloComposableImportFrom: '@vue/apollo-composable',
        vueCompositionApiImportFrom: 'vue',
      },
    },
    './apollo/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
