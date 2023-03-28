"use strict";
// ==> Exemplo 01: Tipo any
const a = 28;
const b = ['Sandro'];
const result = a + b;
/*Quando utilizamos any o mesmo não apresenta erro ao juntar as tags number e string como mosra no exeplo*/
console.log(result);
// ==> Exemplo 02: Quando o tipo any 'any' é inferido implicitamente
/*Quando vc não faz a tipagem o mesmo transforma seu código em  any pirigosicimo*/
// let frase;
// frase = 'Oi, vamos codar!'
// console.log(frase);
// ==> Exemplo 03: Quando devemos usar o tipo any?!
const formulario = {
    nome: 'Sandro',
    sobrenome: 'Matias',
    idade: 34
};
console.log(formulario);
/* Essa forma e feita para utilizar quando for fazer  ou buscar dados de um formulário mais a melhor forma
é fazer com o Unknown*/
