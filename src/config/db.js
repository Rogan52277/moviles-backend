import mysql from "mysql2/promise"
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "../config";

export const connectionMySQL = await mysql.createConnection(
    {
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        port: DB_PORT
    }
)

try {
  await connectionMySQL.connect();
  console.log("Database connection successful");
} catch (err) {
  console.error("Database connection error:", err);
}
