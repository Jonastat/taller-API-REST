import { Router } from "express"
import { methods as usuariosController } from "./../controllers/usuarios.controller.js"

const router = Router()

router.get("/", usuariosController.getUsuarios)

export default router