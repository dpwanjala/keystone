module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9c94b1d63bc8d6157aea0e103794aa81'),
  },
});
