import * as fs from "fs";

export const criarPasta = (caminho: string) => {
  fs.mkdir(caminho, (err) => {
    if (err) throw err;

    console.info("Pastas na rota :" + caminho + " criado");
  });
};
