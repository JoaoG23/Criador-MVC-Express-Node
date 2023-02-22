
  

class {Classe}Services
  extends {Classe}BuscasServices
  implements I{Classe}services
{
  async criar(data: fluxocaixaDto) {
    const fluxocaixa = await this.prismaService.fluxocaixa.create({
      data,
    });
    return fluxocaixa;
  }

  async atualizarUmPorId(id: string, dadosNovos: fluxocaixaDto) {
    const existeIdfluxocaixa = await this.buscarPorId(id);
    if (!existeIdfluxocaixa) {
      throw new Error("Não existe esse ID para ser atualizado");
    }

    const fluxocaixa = await this.prismaService.fluxocaixa.update({
      where: { id },
      data: dadosNovos,
    });
    return fluxocaixa;
  }

  async deletarUmPorId(id: any) {
    const existeIdfluxocaixa = await this.buscarPorId(id);
    if (!existeIdfluxocaixa) {
      throw new Error("Não há esse Id para ser excluido");
    }
    return this.prismaService.fluxocaixa.delete({
      where: { id },
    });
  }
}

export default new {Classe}Services();
  
  
  
  
  
  
  
  
  