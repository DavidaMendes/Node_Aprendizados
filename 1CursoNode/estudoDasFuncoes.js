// Função Expressa - Anonima
const estudanteReprovou = function (notaFinal, faltas){
    if(notaFinal < 7 && faltas > 4){
        return true;
    }else{
        return false;
    }
}

// Função Declarada
function exibirInfoEstudante(nome, data){
    return `O nome é ${nome} e a data é ${data}`;
}

// Função Arrow - Anonima
const estudanteInformacao = (nome, idade) => {
    if(idade > 18){
        return `${nome} é Maior de idade`;
    }else{
        return `${nome} é Menor de idade`;
    }
}

// Arrow Function Resumida - Suprime o conteúdo caso seja um retorno simples - utilizado em funções dentro de funções 

const exibeNome = (nome) => nome;

console.log(estudanteReprovou(6,5));
console.log(estudanteReprovou(10,2));
console.log(exibirInfoEstudante('Maria', 2));
console.log(estudanteInformacao('Davi', 20));
console.log(exibeNome('Regina'));
