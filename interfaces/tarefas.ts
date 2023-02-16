interface ITarefa {
    id: number,
    descricao: string,
    foi_realizada: boolean
}

interface IListaTarefas {
    tarefas: ITarefa[],
    ultimoId: number
}