"use strict";
// => Exemplo 01: Never - Throw Exception
function error(message) {
    throw new Error(message);
}
console.log(error('Erro de Mensagem -01'));
// => Exempo 02: Never inferido automaticamente
function rejectMessage() {
    return error('Error de Mensagem -02');
}
console.log(rejectMessage());
// => Exemplo 03: Função que contém loop infinito retorna o tipo 'never'
/*

const loopinfinito = function loop(){
     while(true) {
        console.log('este exemplo e um loop que inferi como never')
    }
}

*/
// => Exemplo 04: Diferença entre os tipos: 'never' x 'void'
//const algumaCoisaVoid: void = null;
//const algumaCoisaNever: never = null;
// no tipo voide pode ter valor já o never não pode receber nenhum valor
