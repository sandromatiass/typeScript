"use strict";
// ==> Exemplos: number
let num1 = 23.0;
let num2 = 0x78cf;
let num3 = 0o577;
let num4 = 0b110001;
console.log('Number - Ponto Flutuante ==>', num1);
console.log('Number - Hexadecimal ==>', num2);
console.log('Number - Octal ==>', num3);
console.log('Number - Binário ==>', num4);
console.log('Number - Ponto Flutuante ==>', typeof (num1));
console.log('Number - Hexadecimal ==>', typeof (num2));
console.log('Number - Octal ==>', typeof (num3));
console.log('Number - Binário ==>', typeof (num4));
// ==> Exeplos: bigint
// para utilizar o mesmo deve se modificado dentro do tsconfig para a versão 2020 do ecmaScript
let big1 = 9007199254740991n;
let big2 = 549755813891n;
let big3 = 0x220000000000000003n;
let big4 = 295147905179352825859n;
