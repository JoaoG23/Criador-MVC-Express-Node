import * as fs from "fs";
import { nomesEsturuturaLogica } from "../../data";

type EstruturaLogica = {
  id?: number;
  descricao?: string;
  codigo?: string;
};
const transformarVariaveis = (arquivo: string, nomeSubitituido: string) => {
 let resultado = arquivo.replace("{dadosMudados}", nomeSubitituido);
};

export const criarArquivo = (
  caminho: string,
  codigoExtraido: any
) => {

  fs.writeFile(caminho, codigoExtraido, (err) => {
    if (err) throw err;
    console.log("Arquivo gerado" + caminho);
  });
  // fs.writeFileSync(caminho, codigoExtraido)
};
