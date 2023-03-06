export const nomesEsturuturaLogica = [
  {
    id: 0,
    descricao: "controller",
    codigofonte: `

    import { Request, Response } from "express";


class {Classe}Controller implements I{Classe}Controller {
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
      const {dadosMudados} = await {dadosMudados}Service.buscarPorId(id);
      res.status(200).json({dadosMudados});
    } catch (error) {
      res.status(400).json(error.message);
    }
  }


  async pesquisarPorCriterio(req: Request, res: Response) {
    try {
      const criterios: Omit<{Classe}Dto, "ativo"> = req.query;

      const todos = await {dadosMudados}Service.pesquisarPorCriterio(criterios);
      res.status(200).json(todos);
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

export default new {Classe}Controller();

    `,
  },
  {
    id: 1,
    descricao: "service",
    codigofonte: `


    import {
      {dadosMudados}Repository,
      I{Classe}Repository,
    } from "../{dadosMudados}.repository/{Classe}.repository";
    
    export class {Classe}Services {
      constructor(private {dadosMudados}Repository: I{Classe}Repository) {}
    
      async buscarPorId(id: string) {
        return await this.{dadosMudados}Repository.buscarPorId(id);
      }

      async pesquisarPorCriterio(criterios: Omit<{Classe}Dto, "ativo">) {
        return await this.{dadosMudados}Repository.pesquisarPorCriterios(criterios);
      }
    
      async listarTodos() {
        return await this.{dadosMudados}Repository.buscarTodos();
      }
    
      async listarTodosPorPagina(
        numeroPagina: number,
        quantidadeItemPagina: number
      ) {
        return await this.{dadosMudados}Repository.buscarTodosPorPagina(
          numeroPagina,
          quantidadeItemPagina
        );
      }
    
      async criar(dados: {Classe}Dto) {
    
        const {dadosMudados} = await this.{dadosMudados}Repository.salvar(dados);
        return {dadosMudados};
      }
    
      async atualizarUmPorId(id: string, dadosNovos: {Classe}Dto) {
        const existeId{dadosMudados}: any =
          await this.{dadosMudados}Repository.buscarPorId(id);
        if (!existeId{dadosMudados}) {
          throw new Error("Não existe esse ID para ser atualizado");
        }
        const {dadosMudados} = await this.{dadosMudados}Repository.atualizarPorId(id, dadosNovos);
        return {dadosMudados};
      }
    
      async deletarUmPorId(id: any) {
        const existeId{dadosMudados} = await this.{dadosMudados}Repository.buscarPorId(id);
        if (!existeId{dadosMudados}) {
          throw new Error("Não há esse Id para ser excluido");
        }
    
        return this.{dadosMudados}Repository.deletarPorId(id);
      }
    
    
    }
    
    export default new {Classe}Services(new {Classe}Repository());    
  
  `,
  },

  {
    id: 2,
    descricao: "dto",
    codigofonte: `
  
  export class {Classe}Dto implements any {

}

  `,
  },
  {
    id: 3,
    descricao: "routers",
    codigofonte: `
  
  import { Router } from "express";
const routers = Router();
import {dadosMudados}Controller from '../{dadosMudados}.controller/{Classe}.controller';


routers.get("/", {dadosMudados}Controller.listarTodos);
routers.get("/paginas", {dadosMudados}Controller.listarTodosPorPagina);
routers.get("/pesquisa", {dadosMudados}Controller.pesquisarPorCriterio);
routers.get("/:id", {dadosMudados}Controller.listaPorId);

routers.post("/", {dadosMudados}Controller.criar);

routers.put("/:id", {dadosMudados}Controller.atualizarPorId);

routers.delete("/:id", {dadosMudados}Controller.deletarPorId);

export default routers;
  
  `,
  },
  {
    id: 5,
    descricao: "repository",
    codigofonte: `
  
    import { PrismaClient } from "@prisma/client";
    import { Paginacao } from "../../utils/Paginacao";
    import { joinDescricaoSelect } from "./utils/joinDescricaoSelect";
    
    export interface I{Classe}Repository {
      limparDados?();
      pesquisarPorCriterios(criterios: Omit<{Classe}Dto, "ativo">);
      salvar(data: {Classe}Dto);
      atualizarPorId(id: string, newData: {Classe}Dto);
      deletarPorId(id: string);
      buscarPorId(iddepartamento: string);
      buscarTodos();
      contarTodosPorCriterio();
      buscarTodosPorPagina(numeroPagina: number, quantidadeItemPagina: number);
    }
    
    
    export class {Classe}Repository implements I{Classe}Repository {
      private paginacao: Paginacao;
      private prisma: PrismaClient;
      constructor() {
        this.prisma = new PrismaClient();
        this.paginacao = new Paginacao();
      }



      async pesquisarPorCriterios(criterios: Omit<{Classe}Dto, "ativo">) {
        const { id{dadosMudados},descricao } = criterios;
    
        const elementoBuscado = await this.prisma.{dadosMudados}.findMany({
          where: {
            AND: [
              {
                id{dadosMudados}: {
                  contains: id{dadosMudados},
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


      async salvar(data: {Classe}Dto) {
        return await this.prisma.{dadosMudados}.create({
          data,
        });
      }
      async atualizarPorId(id: string, newData: any) {
        return await this.prisma.{dadosMudados}.update({
          where: { id },
          data: newData,
        });
      }
      async deletarPorId(id: string) {
        return await this.prisma.{dadosMudados}.delete({
          where: { id },
        });
      }
      async buscarPorId(id: string) {
        const {dadosMudados} = await this.prisma.{dadosMudados}.findFirst({
          where: { id },
        });
        return {dadosMudados};
      }
      async buscarTodos() {
        return await this.prisma.{dadosMudados}.findMany({
          include: joinDescricaoSelect,
        });
      }
      async contarTodosPorCriterio(criterios: object) {
        const count = await this.prisma.{dadosMudados}.count({ where: criterios });
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
        const {dadosMudados} = await this.prisma.{dadosMudados}.findMany({
          skip: pularPagina,
          take: itemsPorPagina,
        });
    
        return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, {dadosMudados}];
      }
    }
    
  
  `,
  },
];
