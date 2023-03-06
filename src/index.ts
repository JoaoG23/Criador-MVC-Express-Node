/// Criar Criar Diretorio ==

import * as fs from "fs";
import { nomesEsturuturaLogica } from "./data";
import { criarArquivo } from "./utils/criarArquivo/criarArquivo";
import { criarDiretorioTests } from "./utils/criarDiretorioTests/criarDiretorioTests";
import { criarPasta } from "./utils/criarPasta/criarPasta";
import { transformarEmNomeClasse } from "./utils/transformarEmNomeClasse/transformarEmNomeClasse";

const argumentos = process.argv.slice(2);

let entidadoNome = argumentos[0];

const gerarEstruturaMVC = (
  nomeDaEntidade: string,
  nomeDeEstruturasLogica: any[]
) => {
  // caminho pasta inicial
  const caminhoPastaPrincipal = `./codigo-gerado/${nomeDaEntidade}`;

  if (!fs.existsSync(caminhoPastaPrincipal)) {
    criarPasta(caminhoPastaPrincipal);
  }

  criarDiretorioTests(nomeDaEntidade);

  nomeDeEstruturasLogica.forEach((nomesFinais) => {
    /*
    Resultado final 
    do caminho estrutura
    exemplo: 
    codigo-gerado\elementos\elementos.controller
    */
    const pastaNomesFinaisCaminho = `${caminhoPastaPrincipal}/${nomeDaEntidade}.${nomesFinais.descricao}`;

    if (!fs.existsSync(pastaNomesFinaisCaminho)) {
      criarPasta(pastaNomesFinaisCaminho);
    }

    const variveisAdicionadas = nomesFinais.codigofonte.replace(
      /{dadosMudados}/g,
      nomeDaEntidade
    );

    const nomeDeClasse = transformarEmNomeClasse(nomeDaEntidade);

    const caminhoDosArquivos = `${pastaNomesFinaisCaminho}/${nomeDeClasse}.${nomesFinais.descricao}.ts`;
    const caminhoInterface = `${pastaNomesFinaisCaminho}/${nomeDeClasse}.${nomesFinais.descricao}.Interface.ts`;
    const arquivoTestes = `${pastaNomesFinaisCaminho}/${nomeDeClasse}.${nomesFinais.descricao}.spec`;
    // Criar codigo
    criarArquivo(caminhoDosArquivos, variveisAdicionadas);
    criarArquivo(caminhoInterface, "");
    criarArquivo(arquivoTestes, "");
  });
};

gerarEstruturaMVC(entidadoNome, nomesEsturuturaLogica);
