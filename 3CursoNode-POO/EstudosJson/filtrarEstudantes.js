const estudantes = require('./estudantes.json')

function filtrarPorPropriedade(lista, propriedade){
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);
    })
}

// hasOwnProperty verifica se tem a propriedade que estou verificando

const listaEnderecosIncompletos = filtrarPorPropriedade(estudantes, 'cep');
console.log(listaEnderecosIncompletos);

// diferença de filter e find, find acha apenass um e o primeiro, filter acha todos e transforma em um array