import { getConnection } from "./../database/database.js"

const getUsuarios = async (req, res) => {
    const connection = await getConnection()
    const result = await connection.query("SELECT id, nombre_usuario FROM usuarios")
    console.log(result)
    res.json(result)
}

export const methods = {
    getUsuarios
}