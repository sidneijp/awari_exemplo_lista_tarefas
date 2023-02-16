import Tarefa from './models'

class TarefasControllers {
    obtemTarefasController = (req, res) => {
        const tarefas = Tarefa.obtemTarefas()
        res.json({tarefas})
    }

    obtemTarefaController = (req, res) => {
        const { idTarefa } = req.params
        const tarefa = Tarefa.obtemTarefa(idTarefa)
        res.render('index', {tarefa})
    }

    addTarefaController = (req, res) => {
        const { texto } = req.body
        Tarefa.addTarefa(texto)
        res.render('tarefa_criada_com_sucesso')
    }

    atualizaTarefaController = (req, res) => {
        const { idTarefa } = req.params
        const payload = req.body
        Tarefa.atualizaTarefa(idTarefa, payload)
        res.render('tarefa_atualizada_com_sucesso')
    }

    mudaEstadoTarefaController = (req, res) => {
        const { idTarefa } = req.params
        const { foi_realizada } = req.body
        Tarefa.mudaEstadoTarefa(idTarefa, foi_realizada)
        res.render('estado_da_tarefa_atualizada_com_sucesso')
    }

    removeTarefaController = (req, res) => {
        const { idTarefa } = req.params
        Tarefa.removeTarefa(idTarefa)
        res.render('tarefa_removida_com_sucesso')
    }
}

const defaultController = new TarefasControllers()
export default defaultController