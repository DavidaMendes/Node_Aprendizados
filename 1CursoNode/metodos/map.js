const notas = [10, 9.5, 8, 7, 6];

// const notasAtualizadas = notas.map(function (nota) { 
//     return nota + 1;
// })

const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1)

// Função de CallBack que adiciona a cada elemento, unida com Arrow Function, no caso essa tem retorno.

// Diferença de forEach e map é o retorno.

console.log(notasAtualizadas);

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesAtualizados = nomes.map((nome) => nome.toUpperCase());

// Da pra usar o map pra fazer qualquer tipo de alteração em um Array

console.log(nomesAtualizados);
