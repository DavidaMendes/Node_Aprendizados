const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// const nomesAtualizados = new Set(nomes);
// Set é um conjunto, ele é array rite, não da pra usar metodos do array nele

const listaNomeAtualizados = [...new Set(nomes)];

// Isso tira as repetições
console.log(listaNomeAtualizados);