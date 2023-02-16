abstract class AbstractTarefaRepository {
    public abstract addTarefa(texto: string): void
    public abstract removeTarefa(idTarefa: number): void
    public abstract atualizaTarefa(idTarefa: number, tarefa: ITarefa): void
    public abstract obtemTarefa(idTarefa: number): ITarefa | null
    public abstract obtemTarefas(): ITarefa[]
}