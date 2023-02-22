/// Criar Criar Diretorio ==

import * as fs from "fs";
import { nomesEsturuturaLogica } from "./data";
import { criarArquivo } from "./utils/criarArquivo/criarArquivo";
import { criarPasta } from "./utils/criarPasta/criarPasta";

const transformarEmNomeClasse = (nomeVariavel: string) => {
  const extrairPrimeiraLetra = nomeVariavel.at(0);
  const restoPalavra = nomeVariavel.slice(1, nomeVariavel.length);
  const nomeClasse = extrairPrimeiraLetra.toLocaleUpperCase() + restoPalavra;
  return nomeClasse;
};

const gerarEstruturaMVC = (
  nomeDaEntidade: string,
  nomeDeEstruturasLogica: any[]
) => {
  // caminho pasta inicial
  const caminhoPastaPrincipal = `./codigo-gerado/${nomeDaEntidade}`;

  if (!fs.existsSync(caminhoPastaPrincipal)) {
    criarPasta(caminhoPastaPrincipal);
  }

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
    // const classesAdicionadas = nomesFinais.codigofonte.replace(
    //   /{Classe}/g,
    //   transformarEmNomeClasse(nomeDaEntidade)
    // );

    const caminhoDosArquivos = `${pastaNomesFinaisCaminho}/${nomeDaEntidade}.${nomesFinais.descricao}.ts`;
    // Criar codigo
    criarArquivo(caminhoDosArquivos, variveisAdicionadas );

  });
};

gerarEstruturaMVC("fluxocaixa", nomesEsturuturaLogica);

// transformarEmNomeClasse('dalvas')
