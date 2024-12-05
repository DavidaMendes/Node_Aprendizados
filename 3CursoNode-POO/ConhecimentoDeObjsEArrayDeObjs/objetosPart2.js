const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "12312312312",
  turma: "JavaScript",
}

function exibeInfoEstudante(objEstudante, infoEstudante) {
  return objEstudante[infoEstudante];
}

//tipos de formatação
console.log(estudante['nome']);
console.log(estudante['cpf']);
// Mesmo que o de baixo
// Se a propriedade não existir, ele passa undefined

console.log(exibeInfoEstudante(estudante, "nome"));
console.log(exibeInfoEstudante(estudante, "cpf"));
