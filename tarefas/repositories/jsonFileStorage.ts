import fs from 'fs';
import '../interfaces'

type JsonFileDB = {
    tarefas: ITarefa[],
    ultimoId: number
}

export default class TarefaRepository implements AbstractTarefaRepository {
    public addTarefa(texto: string): void {
        const id = TarefaRepository.geraProximoId()
        const { tarefas } = TarefaRepository.obtemJson()
        tarefas.push({ id, texto, foi_realizada: false })
        TarefaRepository.atualizaUltimoId(id)
        TarefaRepository.salvaTarefas(tarefas)
    }

    public removeTarefa(idTarefa: number): void {
        const { tarefas } = TarefaRepository.obtemJson()
        const resultado_tarefas = tarefas.filter(tarefa => tarefa.id != idTarefa)
        TarefaRepository.salvaTarefas(resultado_tarefas)
    }

    public obtemTarefa(idTarefa: number): ITarefa | null {
        const tarefas = this.obtemTarefas()
        const tarefa = tarefas.find(t => t.id == idTarefa)
        return tarefa || null
    }

    public obtemTarefas(): ITarefa[] {
        const { tarefas } = TarefaRepository.obtemJson()
        return tarefas
    }

    private static obtemJson(): JsonFileDB {
        const json_string = fs.readFileSync('./tarefas.json', { encoding: "utf-8" })
        let dados;
        try {
            dados = JSON.parse(json_string)
        } catch (SyntaxError) {
            dados = { tarefas: [], ultimoId: 0 }
        }
        return dados
    }

    private static geraProximoId() {
        const { ultimoId } = TarefaRepository.obtemJson()
        return ultimoId + 1
    }

    private static atualizaUltimoId(ultimoId: number) {
        let { tarefas } = TarefaRepository.obtemJson()
        tarefas = tarefas || []
        const dados = { tarefas, ultimoId }
        const json_string = JSON.stringify(dados)
        fs.writeFileSync('./tarefas.json', json_string, { encoding: "utf-8" })
    }

    private static salvaTarefas(tarefas: ITarefa[]) {
        tarefas = tarefas || []
        const { ultimoId } = TarefaRepository.obtemJson()
        const dados = { tarefas, ultimoId }
        const json_string = JSON.stringify(dados)
        fs.writeFileSync('./tarefas.json', json_string, { encoding: "utf-8" })
    }

}
