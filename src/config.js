import { config } from "dotenv"

config()

export default {
    host: process.env.MYSQLDB_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQLDB_ROOT_USER,
    password: process.env.MYSQLDB_ROOT_PASSWORD,
    port: process.env.MYSQLDB_PORT
}