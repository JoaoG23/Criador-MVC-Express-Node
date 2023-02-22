
  
  import { Router } from "express";
const routers = Router();
import fluxocaixaController from '../fluxocaixas.controller/fluxocaixas.controller';


routers.get("/", fluxocaixaController.listarTodos);
routers.get("/paginas", fluxocaixaController.listarTodosPorPagina);
routers.get("/:id", fluxocaixaController.listaPorId);

routers.post("/", fluxocaixaController.criar);

routers.put("/:id", fluxocaixaController.atualizarPorId);

routers.delete("/:id", fluxocaixaController.deletarPorId);

export default routers;
  
  