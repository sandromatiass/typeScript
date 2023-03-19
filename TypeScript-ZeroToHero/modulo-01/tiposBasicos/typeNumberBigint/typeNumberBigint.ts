// ==> Exemplos: number

let num1: number = 23.0;
let num2: number = 0x78cf;
let num3: number = 0o577;
let num4: number = 0b110001;

console.log('Number - Ponto Flutuante ==>', num1);
console.log('Number - Hexadecimal ==>', num2);
console.log('Number - Octal ==>', num3);
console.log('Number - Binário ==>', num4);

console.log('Number - Ponto Flutuante ==>', typeof(num1));
console.log('Number - Hexadecimal ==>', typeof(num2));
console.log('Number - Octal ==>', typeof(num3));
console.log('Number - Binário ==>', typeof(num4));


// ==> Exeplos: bigint
// para utilizar o mesmo deve se modificado dentro do tsconfig para a versão 2020 do ecmaScript
let big1: bigint = 9007199254740991n;
let big2: bigint = 0b1000000000000000000000000000000000000011n;
let big3: bigint = 0x220000000000000003n;
let big4: bigint = 0o40000000000000000000003n;
