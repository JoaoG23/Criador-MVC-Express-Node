export const nomesEsturuturaLogica = [
  {
    id: 0,
    descricao: "controller",
    codigofonte: `

    import { Request, Response } from "express";


class {Classe}Controller implements I{dadosMudados}Controller {
  async listarTodosPorPagina(req: Request, res: Response) {
    try {
      const { numero_pagina, quantidade_items_pagina } = req.query;
      const pagina = await {dadosMudados}Service.listarTodosPorPagina(
        numero_pagina,
        quantidade_items_pagina
      );
      res.status(200).json(pagina);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async listarTodos(req: Request, res: Response) {
    try {
      const todos = await {dadosMudados}Service.listarTodos();
      res.status(200).json(todos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async listaPorId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {dadosMudados} = await {dadosMudados}Service.listaPorId(id);
      res.status(200).json({dadosMudados});
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async deletarPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const {dadosMudados} = await {dadosMudados}Service.deletarUmPorId(id);
      res.status(200).json({dadosMudados});
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async criar(req: Request, res: Response) {
    try {
      const {dadosMudados} = await {dadosMudados}Service.criar(req.body);
      res.status(200).json({dadosMudados});
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async atualizarPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const {dadosMudados} = await {dadosMudados}Service.atualizarUmPorId(id, req.body);
      res.status(200).json({dadosMudados});
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}

export default new {dadosMudados}Controller();

    `,
  },
  {
    id: 1,
    descricao: "service",
    codigofonte: `
  

class {Classe}Services
  extends {Classe}BuscasServices
  implements I{Classe}services
{
  async criar(data: {dadosMudados}Dto) {
    const {dadosMudados} = await this.prismaService.{dadosMudados}.create({
      data,
    });
    return {dadosMudados};
  }

  async atualizarUmPorId(id: string, dadosNovos: {dadosMudados}Dto) {
    const existeId{dadosMudados} = await this.buscarPorId(id);
    if (!existeId{dadosMudados}) {
      throw new Error("Não existe esse ID para ser atualizado");
    }

    const {dadosMudados} = await this.prismaService.{dadosMudados}.update({
      where: { id },
      data: dadosNovos,
    });
    return {dadosMudados};
  }

  async deletarUmPorId(id: any) {
    const existeId{dadosMudados} = await this.buscarPorId(id);
    if (!existeId{dadosMudados}) {
      throw new Error("Não há esse Id para ser excluido");
    }
    return this.prismaService.{dadosMudados}.delete({
      where: { id },
    });
  }
}

export default new {Classe}Services();
  
  
  
  
  
  
  
  
  `,
  },
  {
    id: 4,
    descricao: "buscas.service",
    codigofonte: `
  import { PrismaClient } from "@prisma/client";

export class {Classe}BuscasServices implements I{Classe}Buscas {
  prismaService: PrismaClient;
  paginacaoService: Paginacao;

  constructor() {
    this.prismaService = new PrismaClient();
    this.paginacaoService = new Paginacao();
  }

  async buscarPorId(id: string) {
    const {dadosMudados} = await this.prismaService.{dadosMudados}.findFirst({
      where: { id },
    });
    return {dadosMudados};
  }

  async listarTodos() {
    const {dadosMudados} = await this.prismaService.{dadosMudados}.findMany({});
    return {dadosMudados};
  }
  async listaPorId(id: string) {
    const {dadosMudados} = await this.prismaService.{dadosMudados}.findUnique({
      where: { id },
    });
    return {dadosMudados};
  }

  async contarTotalRegistros() {
    const contagem = await this.prismaService.{dadosMudados}.count();
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
    const {dadosMudados} = await this.prismaService.{dadosMudados}.findMany({
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, {dadosMudados}];
  }
}

  
  `,
  },
  {
    id: 2,
    descricao: "dto",
    codigofonte: `
  
  export class {dadosMudados}Dto implements any {

}

  `,
  },
  {
    id: 3,
    descricao: "routers",
    codigofonte: `
  
  import { Router } from "express";
const routers = Router();
import {dadosMudados}Controller from '../{dadosMudados}s.controller/{dadosMudados}s.controller';


routers.get("/", {dadosMudados}Controller.listarTodos);
routers.get("/paginas", {dadosMudados}Controller.listarTodosPorPagina);
routers.get("/:id", {dadosMudados}Controller.listaPorId);

routers.post("/", {dadosMudados}Controller.criar);

routers.put("/:id", {dadosMudados}Controller.atualizarPorId);

routers.delete("/:id", {dadosMudados}Controller.deletarPorId);

export default routers;
  
  `,
  },
];
