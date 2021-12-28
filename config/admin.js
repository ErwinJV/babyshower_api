module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '30f412ae3d710e4fef7854bd88fad2a3'),
  },
});
