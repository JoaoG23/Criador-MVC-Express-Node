export const repositoryMock = `import { {Classe}Dto } from "../../../{dadosMudados}.dto/{dadosMudados}.dto";
import { I{Classe}Repository } from "../../../{dadosMudados}.repository/{dadosMudados}.repository.Interface";

export class {Classe}MockRepository implements I{Classe}Repository {
  private {dadosMudados}Mocado: {Classe}Dto[] = [];
  pesquisarPorCriterios(criterios: {Classe}Dto) {
    const { descricao, id{dadosMudados} } = criterios;
    return this.{dadosMudados}Mocado.filter(
      (item) =>
        item.id{dadosMudados} === id{dadosMudados} && item.descricao === descricao
    );
  }

  limparDados() {
    return (this.{dadosMudados}Mocado = []);
  }

  salvar(data: {dadosMudados}Dto) {
    this.{dadosMudados}Mocado.push(data);
    return this.{dadosMudados}Mocado.filter(
      (item) => item.id{dadosMudados} === data.id{dadosMudados}
    );
  }

  atualizarPorId(id{dadosMudados}: string, newData: {Classe}Dto) {
    const idItem = this.{dadosMudados}Mocado.findIndex(
      (item) => item.id{dadosMudados} === id{dadosMudados}
    );

    const itemAtualizado = (this.{dadosMudados}Mocado[idItem] = newData);
    return itemAtualizado;
  }

  deletarPorId(id{dadosMudados}: string) {
    const idItem = this.{dadosMudados}Mocado.findIndex(
      (item) => item.id{dadosMudados} === id{dadosMudados}
    );

    return this.{dadosMudados}Mocado.splice(idItem, 1);
  }
  buscarPorId(id{dadosMudados}: string) {
    const idItem = this.{dadosMudados}Mocado.findIndex(
      (item) => item.id{dadosMudados} === id{dadosMudados}
    );

    return this.{dadosMudados}Mocado[idItem];
  }
  buscarTodos() {
    return this.{dadosMudados}Mocado;
  }
  contarTodosPorCriterio() {
    return this.{dadosMudados}Mocado.length;
  }
  buscarTodosPorPagina(numeroPagina: number, quantidadeItemPagina: number) {
    return this.{dadosMudados}Mocado.slice(
      (numeroPagina - 1) * quantidadeItemPagina,
      numeroPagina * quantidadeItemPagina
    );
  }
}
`;
