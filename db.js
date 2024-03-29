const Pool = require("pg").Pool;
require("dotenv").config();

const devConfig = {
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
};

const proConfig = {
	connectionString: process.env.DATABASE_URL, //HEROKU ADDONS,
	ssl: true,
};

const pool = new Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig
);

module.exports = pool;
