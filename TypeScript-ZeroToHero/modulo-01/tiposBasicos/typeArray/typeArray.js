"use strict";
// ==> Exemplo 01 - Uso de colchetes
let frutas = ['Abacaxi', 'Manga', 'Maça', 'Morango', 'Laranja'];
console.log(frutas[2]);
// ==> Exemplo 02 - Array Object
let frutas1 = ['Abacaxi', 'Manga', 'Maça', 'Morango', 'Laranja'];
console.log(frutas[2]);
// ==> Exemplo 03 - Adicionando masi strings com método 'push'
let idiomas = ['Português', 'Inglês', 'Alemão', 'Mandarin'];
console.log(idiomas);
idiomas.push('Frances');
console.log(idiomas);
// ==> Exemplo 04 - Indentificar tamanho do array - método 'length'
let idiomas1 = ['Português', 'Inglês', 'Alemão', 'Mandarin'];
console.log('Aquantidade de idiomas citado na variável idiomas1 é', idiomas1.length);
// ==> Exemplo 05 - Exemplo de Array com Spread Operator****
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);
// ==> Exmplo 06 - Exemplo de Array com laço de iteração
let linguagensArray = new Array('JavaScript', 'Python', 'PHP', 'C#');
function funcaoLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]);
    }
}
funcaoLinguagens(linguagensArray);
