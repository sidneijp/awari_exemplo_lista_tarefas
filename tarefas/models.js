"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./interfaces");
require("./abstract");
class TarefasDAO {
    constructor(repositorio) {
        this.repositorio = repositorio;
    }
    obtemTarefa(idTarefa) {
        return this.repositorio.obtemTarefa(idTarefa);
    }
    obtemTarefas() {
        return this.repositorio.obtemTarefas();
    }
    addTarefa(texto) {
        this.repositorio.addTarefa(texto);
    }
    atualizaTarefa(idTarefa, tarefa) {
    }
    removeTarefa(idTarefa) {
        this.repositorio.removeTarefa(idTarefa);
    }
}
exports.default = TarefasDAO;
