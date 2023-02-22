
  import { PrismaClient } from "@prisma/client";

export class {Classe}BuscasServices implements I{Classe}Buscas {
  prismaService: PrismaClient;
  paginacaoService: Paginacao;

  constructor() {
    this.prismaService = new PrismaClient();
    this.paginacaoService = new Paginacao();
  }

  async buscarPorId(id: string) {
    const fluxocaixa = await this.prismaService.fluxocaixa.findFirst({
      where: { id },
    });
    return fluxocaixa;
  }

  async listarTodos() {
    const fluxocaixa = await this.prismaService.fluxocaixa.findMany({});
    return fluxocaixa;
  }
  async listaPorId(id: string) {
    const fluxocaixa = await this.prismaService.fluxocaixa.findUnique({
      where: { id },
    });
    return fluxocaixa;
  }

  async contarTotalRegistros() {
    const contagem = await this.prismaService.fluxocaixa.count();
    return contagem;
  }

  async listarTodosPorPagina(
    numeroPagina: number,
    quantidadeItemPagina: number
  ) {
    const quantidadeTotalRegistros = await this.contarTotalRegistros();
    const itemsPorPagina = Number(quantidadeItemPagina);

    const totalQuantidadePaginas =
      await this.paginacaoService.retornaQuantidadePaginas(
        quantidadeTotalRegistros,
        itemsPorPagina
      );

    const pularPagina = (numeroPagina - 1) * itemsPorPagina;
    const fluxocaixa = await this.prismaService.fluxocaixa.findMany({
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, fluxocaixa];
  }
}

  
  