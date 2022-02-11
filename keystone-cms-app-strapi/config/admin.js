module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4b382b42731d3b4d5b2b74aa62aa1164'),
  },
});
