
  
  import { Router } from "express";
const routers = Router();
import autenticacaoUsuariosController from '../autenticacaoUsuarios.controller/{Classe}.controller';


routers.get("/", autenticacaoUsuariosController.listarTodos);
routers.get("/paginas", autenticacaoUsuariosController.listarTodosPorPagina);
routers.get("/pesquisa", autenticacaoUsuariosController.pesquisarPorCriterio);
routers.get("/:id", autenticacaoUsuariosController.listaPorId);

routers.post("/", autenticacaoUsuariosController.criar);

routers.put("/:id", autenticacaoUsuariosController.atualizarPorId);

routers.delete("/:id", autenticacaoUsuariosController.deletarPorId);

export default routers;
  
  