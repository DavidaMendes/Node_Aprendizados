const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
     enderecos: [{
       rua: 'Rua Joseph Climber',
       numero: '45',
       complemento: 'apto 43'
     },
     {
       rua: 'Rua Dona Clotilde',
       numero: '71',
       complemento: null
    }]
  }
  // Método de objetos
  const chavesObjeto = Object.keys(estudante);
  const valoresObjeto = Object.values(estudante);
  const tudoDoObjeto = Object.entries(estudante);
  
  // Cria uma lista de chaves, um array de strings
  console.log(chavesObjeto);
  // Cria uma lista de valores das chaves, um array de strings
  console.log(valoresObjeto);
  // Cria uma lista de valores e chaves, um array de arrays
  console.log(tudoDoObjeto);

  // include -> Método de Array 
  if(!chavesObjeto.includes('enderecos')){
    console.error('é necessário ter um endereço cadastrado')
  }

const objetoOriginal = { a: 1, b: 2 };
const objetoParaCopiar = { b: 3, c: 4 };

const objetoFusionado = Object.assign({}, objetoOriginal, objetoParaCopiar);

console.log(objetoFusionado);
// Saída: { a: 1, b: 3, c: 4 }