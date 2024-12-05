const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;
let somaDasNotas2 = 0;

for (let nota of notas) {
    somaDasNotas += nota;
}

// Metodo CallBakc: parametro é uma função que é chamada de volta quando executa o metodo

// Foreach pega como parametro a nota e usa de cada um para caminhar o array, como se já tivesse um for e um indice interno -> ele não retorna nada, apenas faz oque pedimos

notas.forEach(function (nota){
    somaDasNotas2 += nota;
})

const media = somaDasNotas / notas.length;
const media2 = somaDasNotas2 / notas.length;

console.log(`a média das notas é ${media}`);
console.log(`a média2 das notas é ${media2}`);

// Associação de Arrow Function ao ForEach

const lista = [1, 2, 3, 4, 5];
let soma = 0;
 
lista.forEach(numero => soma += numero);
console.log(soma) //15