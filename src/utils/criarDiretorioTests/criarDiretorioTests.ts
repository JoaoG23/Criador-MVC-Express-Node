import { criarArquivo } from "../criarArquivo/criarArquivo";
import { criarPasta } from "../criarPasta/criarPasta";
import { endToEnd } from "./data/endToEnd";
import { limpadorTabela } from "./data/limpadorTabelas";
import { repositoryMock } from "./data/repositoryMock";

export const criarDiretorioTests = async (nomeDaEntidade:string) => {
    const caminhoPastaTests = `./codigo-gerado/${nomeDaEntidade}/tests`;
    const caminhoUtils = `./codigo-gerado/${nomeDaEntidade}/tests/utils`;
    const pastaLimpadora = `./codigo-gerado/${nomeDaEntidade}/tests/utils/limparTodos${nomeDaEntidade}.ts`;

    
    const caminhoPastaMock = `./codigo-gerado/${nomeDaEntidade}/tests/mock`;
    const caminhoRepositoryMocado = `./codigo-gerado/${nomeDaEntidade}/tests/mock/${nomeDaEntidade}MockRepository`;
    const arquivoRepositoryMocado = `./codigo-gerado/${nomeDaEntidade}/tests/mock/${nomeDaEntidade}MockRepository/${nomeDaEntidade}MockRepository.ts`;
    const caminhoPastaSeeds = `./codigo-gerado/${nomeDaEntidade}/tests/seeds`;
    const arquivoTesteEnd2End = `./codigo-gerado/${nomeDaEntidade}/tests/${nomeDaEntidade}.e2e.spec`;

    criarPasta(caminhoPastaTests);
    criarPasta(caminhoPastaMock);
    
    
    criarArquivo(arquivoTesteEnd2End, endToEnd)
    criarArquivo(pastaLimpadora, limpadorTabela)
    criarPasta(caminhoPastaSeeds);
    criarPasta(caminhoUtils);
    criarPasta(caminhoRepositoryMocado);

    const repositorioMockNovo = repositoryMock.replace(/{dadosMudados}/g,nomeDaEntidade);
    criarArquivo(arquivoRepositoryMocado, repositorioMockNovo);
   

};
