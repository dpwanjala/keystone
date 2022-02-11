module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '143.244.180.168'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'keystone-cms-app-strapi'),
      user: env('DATABASE_USERNAME', 'keystone-cms-app-strapi'),
      password: env('DATABASE_PASSWORD', 'ri1dN5Y8IGAs'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
