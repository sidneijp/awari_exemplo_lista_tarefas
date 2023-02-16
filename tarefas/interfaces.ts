interface ITarefa {
    id: number
    texto: string
    foi_realizada: boolean
}

interface ITarefasDAO {
    addTarefa(texto: string): void
    removeTarefa(idTarefa: number): void
    obtemTarefa(idTarefa: number): ITarefa | null
    obtemTarefas(): ITarefa[]
}