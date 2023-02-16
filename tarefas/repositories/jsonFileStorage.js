"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
require("../interfaces");
class TarefaRepository {
    addTarefa(texto) {
        const id = TarefaRepository.geraProximoId();
        const { tarefas } = TarefaRepository.obtemJson();
        tarefas.push({ id, texto, foi_realizada: false });
        TarefaRepository.atualizaUltimoId(id);
        TarefaRepository.salvaTarefas(tarefas);
    }
    removeTarefa(idTarefa) {
        const { tarefas } = TarefaRepository.obtemJson();
        const resultado_tarefas = tarefas.filter(tarefa => tarefa.id != idTarefa);
        TarefaRepository.salvaTarefas(resultado_tarefas);
    }
    obtemTarefa(idTarefa) {
        const tarefas = this.obtemTarefas();
        const tarefa = tarefas.find(t => t.id == idTarefa);
        return tarefa || null;
    }
    obtemTarefas() {
        const { tarefas } = TarefaRepository.obtemJson();
        return tarefas;
    }
    static obtemJson() {
        const json_string = fs_1.default.readFileSync('./tarefas.json', { encoding: "utf-8" });
        let dados;
        try {
            dados = JSON.parse(json_string);
        }
        catch (SyntaxError) {
            dados = { tarefas: [], ultimoId: 0 };
        }
        return dados;
    }
    static geraProximoId() {
        const { ultimoId } = TarefaRepository.obtemJson();
        return ultimoId + 1;
    }
    static atualizaUltimoId(ultimoId) {
        let { tarefas } = TarefaRepository.obtemJson();
        tarefas = tarefas || [];
        const dados = { tarefas, ultimoId };
        const json_string = JSON.stringify(dados);
        fs_1.default.writeFileSync('./tarefas.json', json_string, { encoding: "utf-8" });
    }
    static salvaTarefas(tarefas) {
        tarefas = tarefas || [];
        const { ultimoId } = TarefaRepository.obtemJson();
        const dados = { tarefas, ultimoId };
        const json_string = JSON.stringify(dados);
        fs_1.default.writeFileSync('./tarefas.json', json_string, { encoding: "utf-8" });
    }
}
exports.default = TarefaRepository;
