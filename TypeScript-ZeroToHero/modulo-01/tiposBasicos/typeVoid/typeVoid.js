"use strict";
// ==> Exemplo 01 - Funções
// não foi necessário informar que a mesma era um void pq a linguagem já interpreta que não tem retorno
// e já transforma em void
function logError(errorMessage) {
    console.log(errorMessage);
}
logError('Required field - Name!');
//por mais que vc não inferir nada o mesmo ira retornar um void
// ==> Exemplo 02 - Funções 
// arrow function
const logErrorExample = (errorMessage) => {
    console.log(errorMessage);
};
logErrorExample('Required field - Surnom');
// ==> Exemplo 3 - Variáveis
let variavelExemploVoid;
// para essa variavel funcionar tem que ir no json cria a regra ("strictNullChecks": false)
// variavelExemploVoid = 1;
// variavelExemploVoid = null;
//aqui não da erro pq o mesmo e compativél com o tipo
variavelExemploVoid = undefined;
console.log(variavelExemploVoid);
