import mysql from "mysql2/promise";
import fs from "fs";
import { BD_HOST, BD_USER, BD_PASSWORD, BD_DATABASE, BD_PORT } from "./config.js";

const pool = mysql.createPool({
  host: BD_HOST,
  user: BD_USER,
  password: BD_PASSWORD,
  database: BD_DATABASE,
  port: BD_PORT,
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync("./aiven-ca.pem") // certificado CA descargado desde Aiven
  }
});

export default pool;
