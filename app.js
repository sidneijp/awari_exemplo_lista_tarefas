const express = require('express')
const { addTarefa, removeTarefa, obtemTarefas} = require('./tarefas.js')

const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    const { tarefas } = obtemTarefas()
    res.render('index', {tarefas})
})

app.post('/criar_tarefa/', (req, res) => {
    const { texto } = req.body
    addTarefa(texto)
    res.render('tarefa_criada_com_sucesso')
})

app.post('/remover_tarefa/:idTarefa/', (req, res) => {
    const { idTarefa } = req.params
    removeTarefa(idTarefa)
    res.render('tarefa_removida_com_sucesso')
})

app.set('view engine', 'pug')

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})