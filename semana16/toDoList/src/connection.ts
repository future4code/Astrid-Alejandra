import dotenv from "dotenv";
import knex from "knex";

dotenv.config();

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
    port: Number(process.env.DB_PORT || "3306"),
    multipleStatements: true,
  },
});

export default connection;
