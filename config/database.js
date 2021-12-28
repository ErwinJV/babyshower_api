
const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host || "127.0.0.1" ,
      port: config.port ||  5432,
      database: config.database || 'whishlist-api',
      user: config.user || 'postgres',
      password: config.password ||  'er05win98',
      ssl: {
        rejectUnauthorized: false
      },
      options: {
        ssl: config.host ? true : false,
      },
    },
    debug: false,
  },
});
 