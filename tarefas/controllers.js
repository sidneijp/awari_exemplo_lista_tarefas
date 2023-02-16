"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("./models"));
const jsonFileStorage_1 = __importDefault(require("./repositories/jsonFileStorage"));
class TarefasControllers {
    constructor() {
        this.tarefasDao = new models_1.default(new jsonFileStorage_1.default());
    }
    obtemTarefasController(req, res) {
        const tarefas = this.tarefasDao.obtemTarefas();
        res.json({ tarefas });
    }
    obtemTarefaController(req, res) {
        const { idTarefa } = req.params;
        const tarefa = this.tarefasDao.obtemTarefa(idTarefa);
        res.render('index', { tarefa });
    }
    addTarefaController(req, res) {
        const { texto } = req.body;
        Tarefa.addTarefa(texto);
        res.render('tarefa_criada_com_sucesso');
    }
    atualizaTarefaController(req, res) {
        const { idTarefa } = req.params;
        const payload = req.body;
        this.tarefasDao.atualizaTarefa(idTarefa, payload);
        res.render('tarefa_atualizada_com_sucesso');
    }
    mudaEstadoTarefaController(req, res) {
        const { idTarefa } = req.params;
        const { foi_realizada } = req.body;
        this.tarefasDao.mudaEstadoTarefa(idTarefa, foi_realizada);
        res.render('estado_da_tarefa_atualizada_com_sucesso');
    }
    removeTarefaController(req, res) {
        const { idTarefa } = req.params;
        this.tarefasDao.removeTarefa(idTarefa);
        res.render('tarefa_removida_com_sucesso');
    }
}
const defaultController = new TarefasControllers();
exports.default = defaultController;
