


    import {
      autenticacaoUsuariosRepository,
      IAutenticacaoUsuariosRepository,
    } from "../autenticacaoUsuarios.repository/AutenticacaoUsuarios.repository";
    
    export class AutenticacaoUsuariosServices {
      constructor(private autenticacaoUsuariosRepository: IAutenticacaoUsuariosRepository) {}
    
      async buscarPorId(id: string) {
        return await this.autenticacaoUsuariosRepository.buscarPorId(id);
      }

      async pesquisarPorCriterio(criterios: Omit<AutenticacaoUsuariosDto, "ativo">) {
        return await this.autenticacaoUsuariosRepository.pesquisarPorCriterios(criterios);
      }
    
      async listarTodos() {
        return await this.autenticacaoUsuariosRepository.buscarTodos();
      }
    
      async listarTodosPorPagina(
        numeroPagina: number,
        quantidadeItemPagina: number
      ) {
        return await this.autenticacaoUsuariosRepository.buscarTodosPorPagina(
          numeroPagina,
          quantidadeItemPagina
        );
      }
    
      async criar(dados: AutenticacaoUsuariosDto) {
    
        const autenticacaoUsuarios = await this.autenticacaoUsuariosRepository.salvar(dados);
        return autenticacaoUsuarios;
      }
    
      async atualizarUmPorId(id: string, dadosNovos: AutenticacaoUsuariosDto) {
        const existeIdautenticacaoUsuarios: any =
          await this.autenticacaoUsuariosRepository.buscarPorId(id);
        if (!existeIdautenticacaoUsuarios) {
          throw new Error("Não existe esse ID para ser atualizado");
        }
        const autenticacaoUsuarios = await this.autenticacaoUsuariosRepository.atualizarPorId(id, dadosNovos);
        return autenticacaoUsuarios;
      }
    
      async deletarUmPorId(id: any) {
        const existeIdautenticacaoUsuarios = await this.autenticacaoUsuariosRepository.buscarPorId(id);
        if (!existeIdautenticacaoUsuarios) {
          throw new Error("Não há esse Id para ser excluido");
        }
    
        return this.autenticacaoUsuariosRepository.deletarPorId(id);
      }
    
    
    }
    
    export default new AutenticacaoUsuariosServices(new AutenticacaoUsuariosRepository());    
  
  