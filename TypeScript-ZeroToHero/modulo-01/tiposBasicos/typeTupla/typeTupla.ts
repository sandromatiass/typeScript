// ==> Exemplo 01 - Uso simples de Tuplas em TypeScript

let pessoa: [string, string, number];
pessoa = ['Sandro', 'Suporte TI', 28];

console.log(pessoa);

// ==> Exemplo 02 - Acessando o valor da Tupla

let pessoa1: [string, string, number];
pessoa1 = ['Sandro', 'Suporte TI', 28];

console.log(pessoa1);

// ==> Exemplo 03 - Outra forma de usar Tupla em TypeScript (com labels)

let pessoa2: [nome: string,posicao: string,idade: number] = ['Sandro', 'Suporte TI', 28];

console.log(pessoa2);

// ==> Exemplo 04 - Usando Tuplas com Spread Operator

//com o spread operator já facilira para não ficar repetindo o nome string dentro da tupla

let listaFrutas: [string, ...string[]] = ['Abacaxi', 'Manga', 'Maça', 'Morango', 'Laranja'];
console.log(...listaFrutas);


// ==> Exemplo 05 - Lista Heretogênea de Tupla
// reutilizando a lista da parte de cima
let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas];
console.log(listaFrutas2);
// ==> Exemplo 06 - Uso de funções com Tuplas

function listarPessoas(nomes: string[], idades: number[]){
    return [...nomes, ...idades];
}

let resultado = listarPessoas(['Sandro', 'Neto'], [28, 8]);

console.log(resultado)

// ==> Exemplo 07 - Labeled Tuples com Spread Operator numa função

type Nome = 
//  | ==>siginifica ou
// essa e uma otima opção para usar o em criação de cadastro
        | [primeiroNome: string, sonbrenome: string]
        | [primeiroNome: string, nomeMeio: string, sobreNome: string]

function criarPessoa(...nome: Nome){
    return [...nome]
}

console.log(criarPessoa('Sandro', 'Matias'))
console.log(criarPessoa('Sandro', 'Matias', 'De Alburquerque'))