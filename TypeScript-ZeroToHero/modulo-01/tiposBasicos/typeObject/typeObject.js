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
        '.' +
        'Seu e-mal será' +
        pessoa.email +
        '.');
}
console.log(onboarding06({ nome: ' Sandro', funcao: ' Sofredor', linguagem: ' JavaScript', email: 'sandromatias@hotmail.com' }));
const filha = {
    nome: 'Sandro',
    sobrenome: 'Matias',
    idade: 28
};
console.log(filha);
const usuario = {
    nome: 'Sandro Matias',
    email: 'sandromatias@hotmail.com'
};
const admin = {
    nome: 'Sandro Matias',
    email: 'sandromatias@hotmail.com',
    admin: true
};
//Criando uma função generica para que tanto o type usuario ou admin acessem
// O T e utilizado para informar que a função e generica e pode ser utilizado em varios paramentros e propiedades
function acessarSistema(usuario) {
    return usuario;
}
console.log(acessarSistema(usuario));
console.log(acessarSistema(admin));
// function acessarSistema (usuario: Usuario): Usuario {
//     return usuario;
// }
// console.log(acessarSistema(usuario));
