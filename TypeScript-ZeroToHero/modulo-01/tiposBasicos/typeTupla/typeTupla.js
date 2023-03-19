"use strict";
// ==> Exemplo 01 - Uso simples de Tuplas em TypeScript
let pessoa;
pessoa = ['Sandro', 'Suporte TI', 28];
console.log(pessoa);
// ==> Exemplo 02 - Acessando o valor da Tupla
let pessoa1;
pessoa1 = ['Sandro', 'Suporte TI', 28];
console.log(pessoa1);
// ==> Exemplo 03 - Outra forma de usar Tupla em TypeScript (com labels)
let pessoa2 = ['Sandro', 'Suporte TI', 28];
console.log(pessoa2);
// ==> Exemplo 04 - Usando Tuplas com Spread Operator
//com o spread operator já facilira para não ficar repetindo o nome string dentro da tupla
let listaFrutas = ['Abacaxi', 'Manga', 'Maça', 'Morango', 'Laranja'];
console.log(...listaFrutas);
// ==> Exemplo 05 - Lista Heretogênea de Tupla
// reutilizando a lista da parte de cima
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
// ==> Exemplo 06 - Uso de funções com Tuplas
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Sandro', 'Neto'], [28, 8]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Sandro', 'Matias'));
console.log(criarPessoa('Sandro', 'Matias', 'De Alburquerque'));
