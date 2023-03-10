
  
    import { PrismaClient } from "@prisma/client";
    import { Paginacao } from "../../utils/Paginacao";
    import { joinDescricaoSelect } from "./utils/joinDescricaoSelect";
    
    export interface IAutenticacaoUsuariosRepository {
      limparDados?();
      pesquisarPorCriterios(criterios: Omit<AutenticacaoUsuariosDto, "ativo">);
      salvar(data: AutenticacaoUsuariosDto);
      atualizarPorId(id: string, newData: AutenticacaoUsuariosDto);
      deletarPorId(id: string);
      buscarPorId(iddepartamento: string);
      buscarTodos();
      contarTodosPorCriterio();
      buscarTodosPorPagina(numeroPagina: number, quantidadeItemPagina: number);
    }
    
    
    export class AutenticacaoUsuariosRepository implements IAutenticacaoUsuariosRepository {
      private paginacao: Paginacao;
      private prisma: PrismaClient;
      constructor() {
        this.prisma = new PrismaClient();
        this.paginacao = new Paginacao();
      }



      async pesquisarPorCriterios(criterios: Omit<AutenticacaoUsuariosDto, "ativo">) {
        const { idautenticacaoUsuarios,descricao } = criterios;
    
        const elementoBuscado = await this.prisma.autenticacaoUsuarios.findMany({
          where: {
            AND: [
              {
                idautenticacaoUsuarios: {
                  contains: idautenticacaoUsuarios,
                },
              },
              {
                descricao: {
                  contains: descricao,
                },
              },
            ],
          },
        });
    
        return elementoBuscado;
      }


      async salvar(data: AutenticacaoUsuariosDto) {
        return await this.prisma.autenticacaoUsuarios.create({
          data,
        });
      }
      async atualizarPorId(id: string, newData: any) {
        return await this.prisma.autenticacaoUsuarios.update({
          where: { id },
          data: newData,
        });
      }
      async deletarPorId(id: string) {
        return await this.prisma.autenticacaoUsuarios.delete({
          where: { id },
        });
      }
      async buscarPorId(id: string) {
        const autenticacaoUsuarios = await this.prisma.autenticacaoUsuarios.findFirst({
          where: { id },
        });
        return autenticacaoUsuarios;
      }
      async buscarTodos() {
        return await this.prisma.autenticacaoUsuarios.findMany({
          include: joinDescricaoSelect,
        });
      }
      async contarTodosPorCriterio(criterios: object) {
        const count = await this.prisma.autenticacaoUsuarios.count({ where: criterios });
        return count;
      }
    
      async buscarTodosPorPagina(
        numeroPagina: number,
        quantidadeItemPagina: number
      ) {
        const quantidadeTotalRegistros = await this.contarTodosPorCriterio({
        });
        const itemsPorPagina = Number(quantidadeItemPagina);
    
        const totalQuantidadePaginas =
          await this.paginacao.retornaQuantidadePaginas(
            quantidadeTotalRegistros,
            itemsPorPagina
          );
    
        const pularPagina = (numeroPagina - 1) * itemsPorPagina;
        const autenticacaoUsuarios = await this.prisma.autenticacaoUsuarios.findMany({
          skip: pularPagina,
          take: itemsPorPagina,
        });
    
        return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, autenticacaoUsuarios];
      }
    }
    
  
  