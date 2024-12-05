const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
}
const estudante2 = {
    nome: 'Wila Silva',
    idade: 32,
    cpf: '15412432712',
    turma: 'Python'
}

const turma = [estudante, estudante2];

for (let i of turma){
    console.log(`\n${i.nome} é aluno da turma ${i.turma}\n Tem os 3 primeiros digitos do cpf: ${i.cpf.substring(0, 3)}`);
}
// Objeto: algo com várias propriedades que tenta refletir as coisas da vida real

