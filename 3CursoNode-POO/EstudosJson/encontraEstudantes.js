const estudantes = require('./estudantes.json');

function buscaInformacao(lista, chave, valor){
    return lista.find((estudante) => estudante[chave].includes(valor));
    // find - metodo de Arrays, um json pode ser um Array de objetos, por isso usa o find para encontrar algo

    // include ve se esta dentro de algo, independente do que for, array, string ou numerico
}

const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Juliet');
const estudanteEncontradoTelefone = buscaInformacao(estudantes, 'telefone', '1198123183');
console.log(estudanteEncontrado);
console.log(estudanteEncontradoTelefone);