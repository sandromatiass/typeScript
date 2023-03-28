"use strict";
// ==> Exemplo 01: Tipo Unknown
let valorVariavel;
valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = 'Oi, coderssssss';
console.log(valorVariavel);
// ==> Exemplo 02: Erro ao tentar atribuir um valor do tipo 'unknown' a outros tipos!
/*nunca inferir outro valores ao tipo unknown

let valor: unknown;
let valor1: boolean = valor;*/
// ==> Exemplo 03: Difereça entre: 'Any' vs  'unknown'
let algumaCoisaAny;
let algumaCoisaUnknown;
console.log(algumaCoisaAny.toFixed(2));
//resolvendo assim.
if (typeof algumaCoisaUnknown === 'number') {
    console.log(algumaCoisaUnknown.toFixed(2));
}
/*
Porque um da erro e o outro não é pq o metodo toFixed ele e do tipo number prototype uma vez que estamos
utilizando o any ele não fará uma verificação e o valor e numérico. ==>

Já o Unknown faz a verificação para resolver criar um if para melhorar o código para que o o mesmo não quebre.


*/ 
