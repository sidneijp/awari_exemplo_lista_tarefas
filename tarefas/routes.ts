const express = require('express')
import controllers from "./controllers"

const router = express.Router()

router.get('', controllers.obtemTarefasController)
router.get(':idTarefa/', controllers.obtemTarefaController)
router.post('', controllers.addTarefaController)
router.put(':idTarefa/', controllers.atualizaTarefaController)
router.patch(':idTarefa/', controllers.mudaEstadoTarefaController)
router.delete(':idTarefa/', controllers.removeTarefaController)

export default router