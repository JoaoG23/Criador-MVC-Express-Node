export const transformarEmNomeClasse = (nomeVariavel: string) => {
    const extrairPrimeiraLetra = nomeVariavel.at(0);
    const restoPalavra = nomeVariavel.slice(1, nomeVariavel.length);
    const nomeClasse = extrairPrimeiraLetra.toLocaleUpperCase() + restoPalavra;
    return nomeClasse;
  };