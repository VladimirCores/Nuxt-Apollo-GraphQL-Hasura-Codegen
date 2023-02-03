import eslintPlugin from 'vite-plugin-eslint';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/apollo'],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'GQL_SERVER/graphql',
        httpLinkOptions: {
          headers: {
            'x-hasura-admin-secret': 'GQL_SERVER_ADMIN_SECRET',
          },
        },
      },
    },
  },
  vite: {
    plugins: [eslintPlugin()],
  },
});
