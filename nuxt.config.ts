import eslintPlugin from 'vite-plugin-eslint';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  telemetry: false,
  modules: ['@nuxtjs/apollo'],
  apollo: {
    clients: {
      default: {
        httpEndpoint: `${process.env.GQL_SERVER}`,
        httpLinkOptions: {
          headers: {
            'x-hasura-admin-secret': `${process.env.GQL_SERVER_ADMIN_SECRET}`,
          },
        },
      },
    },
  },
  vite: {
    plugins: [eslintPlugin()],
  },
});
