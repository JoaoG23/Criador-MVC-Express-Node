import { AutenticacaoUsuariosDto } from "../../../autenticacaoUsuarios.dto/autenticacaoUsuarios.dto";
import { IAutenticacaoUsuariosRepository } from "../../../autenticacaoUsuarios.repository/autenticacaoUsuarios.repository.Interface";

export class AutenticacaoUsuariosMockRepository implements IAutenticacaoUsuariosRepository {
  private autenticacaoUsuariosMocado: AutenticacaoUsuariosDto[] = [];
  pesquisarPorCriterios(criterios: AutenticacaoUsuariosDto) {
    const { descricao, idautenticacaoUsuarios } = criterios;
    return this.autenticacaoUsuariosMocado.filter(
      (item) =>
        item.idautenticacaoUsuarios === idautenticacaoUsuarios && item.descricao === descricao
    );
  }

  limparDados() {
    return (this.autenticacaoUsuariosMocado = []);
  }

  salvar(data: autenticacaoUsuariosDto) {
    this.autenticacaoUsuariosMocado.push(data);
    return this.autenticacaoUsuariosMocado.filter(
      (item) => item.idautenticacaoUsuarios === data.idautenticacaoUsuarios
    );
  }

  atualizarPorId(idautenticacaoUsuarios: string, newData: AutenticacaoUsuariosDto) {
    const idItem = this.autenticacaoUsuariosMocado.findIndex(
      (item) => item.idautenticacaoUsuarios === idautenticacaoUsuarios
    );

    const itemAtualizado = (this.autenticacaoUsuariosMocado[idItem] = newData);
    return itemAtualizado;
  }

  deletarPorId(idautenticacaoUsuarios: string) {
    const idItem = this.autenticacaoUsuariosMocado.findIndex(
      (item) => item.idautenticacaoUsuarios === idautenticacaoUsuarios
    );

    return this.autenticacaoUsuariosMocado.splice(idItem, 1);
  }
  buscarPorId(idautenticacaoUsuarios: string) {
    const idItem = this.autenticacaoUsuariosMocado.findIndex(
      (item) => item.idautenticacaoUsuarios === idautenticacaoUsuarios
    );

    return this.autenticacaoUsuariosMocado[idItem];
  }
  buscarTodos() {
    return this.autenticacaoUsuariosMocado;
  }
  contarTodosPorCriterio() {
    return this.autenticacaoUsuariosMocado.length;
  }
  buscarTodosPorPagina(numeroPagina: number, quantidadeItemPagina: number) {
    return this.autenticacaoUsuariosMocado.slice(
      (numeroPagina - 1) * quantidadeItemPagina,
      numeroPagina * quantidadeItemPagina
    );
  }
}
