import TarefasDAO from './models'
import TarefaRepository from './repositories/jsonFileStorage'


class TarefasControllers {
    tarefasDao

    constructor() {
        this.tarefasDao = new TarefasDAO(new TarefaRepository())
    }

    obtemTarefasController(req, res) {
        const tarefas = this.tarefasDao.obtemTarefas()
        res.json({ tarefas })
    }

    obtemTarefaController(req, res) {
        const { idTarefa } = req.params
        const tarefa = this.tarefasDao.obtemTarefa(idTarefa)
        res.render('index', { tarefa })
    }

    addTarefaController(req, res) {
        const { texto } = req.body
        this.tarefasDao.addTarefa(texto)
        res.render('tarefa_criada_com_sucesso')
    }

    atualizaTarefaController(req, res) {
        const { idTarefa } = req.params
        const payload = req.body
        this.tarefasDao.atualizaTarefa(idTarefa, payload)
        res.render('tarefa_atualizada_com_sucesso')
    }

    mudaEstadoTarefaController(req, res) {
        const { idTarefa } = req.params
        const { foi_realizada } = req.body
        const tarefa = this.tarefasDao.obtemTarefa(idTarefa)
        if (tarefa) {
            tarefa.foi_realizada = foi_realizada
            this.tarefasDao.atualizaTarefa(idTarefa, tarefa)
        }
        res.render('estado_da_tarefa_atualizada_com_sucesso')
    }

    removeTarefaController(req, res) {
        const { idTarefa } = req.params
        this.tarefasDao.removeTarefa(idTarefa)
        res.render('tarefa_removida_com_sucesso')
    }
}

const defaultController = new TarefasControllers()
export default defaultController