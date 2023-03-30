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
    email?: string;
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
        '.'
    );
}

console.log(onboarding06({nome: ' Sandro', funcao: ' Sofredor', linguagem: ' JavaScript'}))

// ==> Exemplo 07 - Tipos de extenções (heranças)

// ==> Exemplo 08 - Tipos de Interseções

// ==> Exemplo 09 - Generic Objects

// ==> Exemplo 01