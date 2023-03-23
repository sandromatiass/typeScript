// ==> Exemplo 01: Numeric Enums (Enums Numérico)

enum Idioma {
    Portugues,
    Espanhol,
    Ingles,
    Frances,
}

console.log(Idioma);


// ==> Exemplo 02: String Enums 

enum Dia {
    Segunda = 'SEG',
    Terca = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Domingo = 'DOM',
}

console.log(Dia.Quarta);

console.log(Dia);

// ==> Exemplo 03: Como podemos acessar um valor de um Enums com uma chave: (usandro o const)

const enum Comida {
    
    Hamburger = 'Haburger',
    Massa = 'Massa',
    Pizza = 'Pizza',
    Torta = 'Torta',
    Churrasco = 'Churrasco',
}

function comida(c: Comida){
    return 'Comidas muito apetitosas!';
}

console.log(comida(Comida.Pizza));
console.log(comida(Comida.Churrasco));
// ==> console.log(comida(5)); ==> nunca utilizar assim


// ==> Exeplo 04:   Quando usar enum?!

enum Tarefa {
    Todo,
    Progress, 
    Done,
}

const concluidaTarefa ={
    id: 1,
    status: Tarefa.Done,
    descrição: 'Parabéns! Tarefa concluida com sucesso!',
}

if (concluidaTarefa.status === Tarefa.Done){
    console.log('Enviar e-mail: Tarefa Concluida.')
}