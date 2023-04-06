// ==> Exemplo 01 - Exemplo básico de uso do Type Object

const individuo = {
    nome: 'sandro',
    sobrenome: 'Matias',
    idade: 28,
    funcao: 'sofredor',
}

console.log(individuo)

// ==> Exemplo 02 - Object como parâmtros de função(ele podem ser anônimos)

function onboarding01(funcionario: {nome: string} ) {
    return 'Seja bem vindo(a)' + funcionario.nome;
}

console.log(onboarding01({nome: ' Sandro matias'}))

// ==> Exemplo 03 - object nomeados

interface Pessoa {
    nome: string;
    funcao: string;
}

function onboarding02(pessoa: Pessoa){
    return (
        'Seja bem-vinda' +
        pessoa.nome +
        '!' +
        'Sua função aqui na empresa será' +
        pessoa.funcao +
        '.'
    );
}

console.log(onboarding02({nome: ' Sandro', funcao: ' Sofredor'}))

// ==> Exemplo 04 - object como o type alias 

type Pessoa04 = {
    nome: string;
    funcao: string;
    linguagem: string;
}

function onboarding03(pessoa: Pessoa04){
    return (
        'Seja bem-vinda' +
        pessoa.nome +
        '!' +
        'Sua função aqui na empresa será' +
        pessoa.funcao +
        '.' +
        'Você irá trabalhar com a linguagem' +
        pessoa.linguagem +
        '.'
    );
}

console.log(onboarding03({nome: ' Sandro', funcao: ' Sofredor', linguagem: ' JavaScript'}))

// ==> Exemplo 05 - usando optional no object

interface Pessoa05 {
    nome: string;
    funcao: string;
    linguagem: string;
    //aqui ela informa que a propiedade e um dado opcional
    email?: string;
}


function onboarding05(pessoa: Pessoa05){
    return (
        'Seja bem-vinda' +
        pessoa.nome +
        '!' +
        'Sua função aqui na empresa será' +
        pessoa.funcao +
        '.' +
        'Você irá trabalhar com a linguagem' +
        pessoa.linguagem +
        '.'
    );
}

console.log(onboarding05({nome: ' Sandro', funcao: ' Sofredor', linguagem: ' JavaScript'}))

//nesse caso aqui acima não fica necessário informar o ip.

// ==> Exemplo 06 - Propiedade 'readonly' (se deseja proibir que os devs não modifiquem um determinado objeto use o readonly.)

interface Pessoa06 {
    nome: string;
    funcao: string;
    linguagem: string;
    //aqui ela informa que a propiedade e um dado opcional
   readonly email: string;
}


function onboarding06(pessoa: Pessoa05){
    return (
        'Seja bem-vinda' +
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
        '.'
    );
}

console.log(onboarding06({nome: ' Sandro', funcao: ' Sofredor', linguagem: ' JavaScript',email: 'sandromatias@hotmail.com'}))

// ==> Exemplo 07 - Tipos de extenções (heranças)

interface Mae {
    nome: string;
}

interface Pai {
    sobrenome: string;
}

interface Filha extends Mae, Pai {
    idade: number;
}

const filha: Filha = {
    nome: 'Sandro',
    sobrenome: 'Matias',
    idade: 28
}

console.log(filha)

// ==> Exemplo 08 - Tipos de Interseções

interface Cachorro {
    tipo: string;
}

interface Gato{
    tipo: string;
}

type Animal = Cachorro & Gato;

// ==> Exemplo 09 - Generic Objects

type Usuario = {
    nome: string;
    email: string;
}

type Admin = {
    nome: string;
    email: string;
    admin: true;
}

const usuario: Usuario = {
    nome: 'Sandro Matias',
    email: 'sandromatias@hotmail.com'
}

const admin: Admin = {
    nome: 'Sandro Matias',
    email: 'sandromatias@hotmail.com',
    admin: true
}

//Criando uma função generica para que tanto o type usuario ou admin acessem
// O T e utilizado para informar que a função e generica e pode ser utilizado em varios paramentros e propiedades
function acessarSistema<T>(usuario: T): T {
    return usuario
}

console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));


// function acessarSistema (usuario: Usuario): Usuario {
//     return usuario;
// }

// console.log(acessarSistema(usuario));
