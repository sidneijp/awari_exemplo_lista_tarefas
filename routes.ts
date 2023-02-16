const express = require('express')
import tarefasRouter from "./tarefas/routes"

const router = express.Router()

router.use("api/tarefas/", tarefasRouter)
export default router