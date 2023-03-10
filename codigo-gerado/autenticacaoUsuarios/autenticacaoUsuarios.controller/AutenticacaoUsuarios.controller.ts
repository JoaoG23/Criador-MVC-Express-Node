

    import { Request, Response } from "express";


export class AutenticacaoUsuariosController implements IAutenticacaoUsuariosController {
  async listarTodosPorPagina(req: Request, res: Response) {
    try {
      const { numero_pagina, quantidade_items_pagina } = req.query;
      const pagina = await autenticacaoUsuariosService.listarTodosPorPagina(
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
      const todos = await autenticacaoUsuariosService.listarTodos();
      res.status(200).json(todos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async listaPorId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const autenticacaoUsuarios = await autenticacaoUsuariosService.buscarPorId(id);
      res.status(200).json(autenticacaoUsuarios);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }


  async pesquisarPorCriterio(req: Request, res: Response) {
    try {
      const criterios: Omit<AutenticacaoUsuariosDto, "ativo"> = req.query;

      const todos = await autenticacaoUsuariosService.pesquisarPorCriterio(criterios);
      res.status(200).json(todos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async deletarPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const autenticacaoUsuarios = await autenticacaoUsuariosService.deletarUmPorId(id);
      res.status(200).json(autenticacaoUsuarios);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async criar(req: Request, res: Response) {
    try {
      const autenticacaoUsuarios = await autenticacaoUsuariosService.criar(req.body);
      res.status(200).json(autenticacaoUsuarios);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async atualizarPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const autenticacaoUsuarios = await autenticacaoUsuariosService.atualizarUmPorId(id, req.body);
      res.status(200).json(autenticacaoUsuarios);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}


    