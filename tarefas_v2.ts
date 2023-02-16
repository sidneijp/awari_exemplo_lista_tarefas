const fs = require('fs')
require('./interfaces/tarefas.ts')

const obtemTarefas = function(): IListaTarefas {
    const json_string = fs.readFileSync('./tarefas.json', {encoding: "utf-8"})
    let dados;
    try {
        dados = JSON.parse(json_string)
    } catch (SyntaxError) {
        dados = {tarefas: [], ultimoId: 0}
    }
    return dados
}

const geraProximoId = function() {
    const {ultimoId} = obtemTarefas()
    return ultimoId + 1
}

const atualizaUltimoId = function(ultimoId: IListaTarefas["ultimoId"]) {
    let { tarefas } = obtemTarefas()
    tarefas = tarefas || []
    const dados = {tarefas, ultimoId}
    const json_string = JSON.stringify(dados)
    fs.writeFileSync('./tarefas.json', json_string, {encoding: "utf-8"})
}

const salvaTarefas = function(tarefas: ITarefa[]) {
    tarefas = tarefas || []
    const { ultimoId } = obtemTarefas()
    const dados = {tarefas, ultimoId}
    const json_string = JSON.stringify(dados)
    fs.writeFileSync('./tarefas.json', json_string, {encoding: "utf-8"})
}

const addTarefa = function(texto: ITarefa["descricao"]) {
    const id = geraProximoId()
    const { tarefas } = obtemTarefas()
    tarefas.push({id, descricao: texto, foi_realizada: false})
    atualizaUltimoId(id)
    salvaTarefas(tarefas)
}

const removeTarefa = function(idTarefa: ITarefa["id"]) {
    const { tarefas } = obtemTarefas()
    const resultado_tarefas = tarefas.filter(tarefa => tarefa.id != idTarefa)
    salvaTarefas(resultado_tarefas)
}

module.exports = {removeTarefa, addTarefa, obtemTarefas}