// ==> Variáveis [Type Annotations]

let nome:string = "Sandro" 
console.log(nome)

// ==>  Arrays [Type Annotations]

let familia:string[] = ["Sandro", "Neto", "Aysha", "Dane"]
console.log(familia + " Em array") 

// ==> Objetos [Type Annotations]

let carro: {
    nome: string;
    ano: number;
    preco: number;
}

carro = {nome: "Fusca", ano: 2019, preco:80000}
console.log(carro);

// ==> Functions [Type Annotations]

function multiplicandoNumero(num1: number, num2: number) {
    return num1 * num2;
}

console.log(multiplicandoNumero(2, 12))