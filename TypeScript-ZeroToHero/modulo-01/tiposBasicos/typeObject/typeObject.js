"use strict";
// ==> Exemplo 01 - Exemplo básico de uso do Type Object
const individuo = {
    nome: 'sandro',
    sobrenome: 'Matias',
    idade: 28,
    funcao: 'sofredor',
};
console.log(individuo);
// ==> Exemplo 02 - Object como parâmtros de função(ele podem ser anônimos)
function onboarding01(funcionario) {
    return 'Seja bem vindo(a)' + funcionario.nome;
}
console.log(onboarding01({ nome: ' Sandro matias' }));
// ==> Exemplo 03 - object nomeados
// ==> Exemplo 04 - object como o type alias (usando interface)
// ==> Exemplo 05 - usando optional no object
// ==> Exemplo 06 - Propiedade 'readonly' (se deseja proibir que os devs não modifiquem um determinado objeto use o readonly.)
// ==> Exemplo 07 - Tipos de extenções (heranças)
// ==> Exemplo 08 - Tipos de Interseções
// ==> Exemplo 09 - Generic Objects
// ==> Exemplo 01
