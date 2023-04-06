export { }

// ==> Exemplo 01 - Uso do if

const numeroMax = 100;
let contador = 100;

if(contador < numeroMax){
    contador++
}

console.log(contador);

// ==> Exemplo 02 - Uso do if-else

const idade = 15;

if(idade >= 18){
    console.log('Você pode digirir!')
} else {
    console.log('Você não pode dirigir!')
}

// ==> Exemplo 03 - if else if 

let desconto: number;

let valorCompra = 14;

if(valorCompra > 0 && valorCompra <= 5){
    desconto = 5;
} else if (valorCompra > 0 && valorCompra <= 10){
    desconto = 10;
} else {
    desconto = 15;
}

console.log(`Você teve um desconto de ...: ${desconto} % desconto`)
//==> Exemplo 04 - Ternário (? :)

const idadeVotacao = 18;

if (idadeVotacao >= 18) {
    console.log('Você pode votar')
} else {
    console.log('Você não pode votar')
}

//==> Ternário

const idadeVotacao2 =15;

const podeVotar = (idadeVotacao2 >= 18) ? 'Você pode votar' : 'Você não pode votar.'

console.log(podeVotar)