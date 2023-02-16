import './interfaces'
import './abstract'


export default class TarefasDAO implements ITarefasDAO {
    repositorio

    constructor(repositorio: AbstractTarefaRepository) {
        this.repositorio = repositorio
    }
    obtemTarefa(idTarefa: number): ITarefa | null {
        return this.repositorio.obtemTarefa(idTarefa)
    }

    obtemTarefas(): ITarefa[] {
        return this.repositorio.obtemTarefas()
    }

    addTarefa(texto: string) {
        this.repositorio.addTarefa(texto)
    }

    atualizaTarefa(idTarefa: number, tarefa: ITarefa) {

    }

    removeTarefa(idTarefa: number) {
        this.repositorio.removeTarefa(idTarefa)
    }
}
