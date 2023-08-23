import express from "express";
import { createPool } from "mysql2/promise";
import app from "./app.js"

const main=()=>{
    app.listen(app.get("port"))
    console.log(`Server on port ${app.get("port")}`)
}

main()

/* const app = express()

const pool = createPool({
    host: process.env.MYSQLDB_HOST,
    user: process.env.MYSQLDB_ROOT_USER,
    password: process.env.MYSQLDB_ROOT_PASSWORD,
    port: process.env.MYSQLDB_PORT
})

app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('/ping', async (req, res) => {
    const result = await pool.query('SELECT NOW()')
    res.json(result[0])
})

app.listen(3000)
console.log('Server on port', 3000) */