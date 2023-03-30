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
function onboarding02(pessoa) {
    return ('Seja bem-vinda' +
        pessoa.nome +
        '!' +
        'Sua função aqui na empresa será' +
        pessoa.funcao +
        '.');
}
console.log(onboarding02({ nome: ' Sandro', funcao: ' Sofredor' }));
function onboarding03(pessoa) {
    return ('Seja bem-vinda' +
        pessoa.nome +
        '!' +
        'Sua função aqui na empresa será' +
        pessoa.funcao +
        '.' +
        'Você irá trabalhar com a linguagem' +
        pessoa.linguagem +
        '.');
}
console.log(onboarding03({ nome: ' Sandro', funcao: ' Sofredor', linguagem: ' JavaScript' }));
function onboarding05(pessoa) {
    return ('Seja bem-vinda' +
        pessoa.nome +
        '!' +
        'Sua função aqui na empresa será' +
        pessoa.funcao +
        '.' +
        'Você irá trabalhar com a linguagem' +
        pessoa.linguagem +
        '.');
}
console.log(onboarding05({ nome: ' Sandro', funcao: ' Sofredor', linguagem: ' JavaScript' }));
function onboarding06(pessoa) {
    return ('Seja bem-vinda' +
        pessoa.nome +
        '!' +
        'Sua função aqui na empresa será' +
        pessoa.funcao +
        '.' +
        'Você irá trabalhar com a linguagem' +
        pessoa.linguagem +
        '.');
}
console.log(onboarding06({ nome: ' Sandro', funcao: ' Sofredor', linguagem: ' JavaScript' }));
// ==> Exemplo 07 - Tipos de extenções (heranças)
// ==> Exemplo 08 - Tipos de Interseções
// ==> Exemplo 09 - Generic Objects
// ==> Exemplo 01
