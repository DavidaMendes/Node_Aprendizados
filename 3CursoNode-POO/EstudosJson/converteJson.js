const estudante = require('./estudante.json');

const stringEstudante = JSON.stringify(estudante);
// Transforme o "Objeto JSON" em string, logo não da pra acessar pro mesmo jeito. Para exportar é ideia deixar o json em string mas para acessar no código é ideal deixar em JSON

const objEstudante = JSON.parse(stringEstudante);
// console.log(stringEstudante);
// console.log(objEstudante);


// Clonagem profunda
const objetoOriginal = { 
    chave: 'valor' 
};
const copiaProfunda = JSON.parse(JSON.stringify(objetoOriginal));

copiaProfunda.chave = 'novoValor';
console.log(objetoOriginal.chave); // Saída: valor