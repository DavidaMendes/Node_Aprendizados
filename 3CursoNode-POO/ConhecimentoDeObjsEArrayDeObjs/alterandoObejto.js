const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "12312312312",
  turma: "JavaScript",
};

estudante.idade = 22;
estudante.telefone = "994923388";
console.log(estudante.telefone);
console.log(estudante);

// Verificação de um parametro do objeto, deve ter forma melhor
const condicao = function (obj){
    if(obj.cidade){
        return;
    }
}

console.log(condicao(estudante));