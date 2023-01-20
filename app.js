const express = require('express')
const fs = require('fs')

const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))

const obtemTarefas = function() {
    const json_string = fs.readFileSync('./tarefas.json', {encoding: "utf-8"})
    const dados = JSON.parse(json_string)
    return dados
}

const geraProximoId = function() {
    const {ultimoId} = obtemTarefas()
    return ultimoId + 1
}

const salvaTarefas = function(tarefas) {
    const ultimoId = tarefas[tarefas.length - 1].id
    const dados = {tarefas, ultimoId}
    const json_string = JSON.stringify(dados)
    fs.writeFileSync('./tarefas.json', json_string, {encoding: "utf-8"})
}

app.get('/', (req, res) => {
    const { tarefas } = obtemTarefas()
    res.render('index', {tarefas})
})

app.post('/criar_tarefa/', (req, res) => {
    const { body } = req
    const { tarefas } = obtemTarefas()
    const id = geraProximoId()
    const tarefa = {id, "texto": body.texto, foi_realizada: false}
    tarefas.push(tarefa)
    salvaTarefas(tarefas)
    res.render('tarefa_criada_com_sucesso')
})

app.post('/remover_tarefa/:idTarefa/', (req, res) => {
    const { idTarefa } = req.params
    const { tarefas } = obtemTarefas()
    const resultado_tarefas = tarefas.filter(tarefa => tarefa.id != idTarefa)
    salvaTarefas(resultado_tarefas)
    res.render('tarefa_removida_com_sucesso')
})

app.set('view engine', 'pug')

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})