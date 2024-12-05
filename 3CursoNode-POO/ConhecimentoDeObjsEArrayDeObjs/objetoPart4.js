const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "12312312312",
  turma: "JavaScript",
  bolsista: true,
  telefones: ["551199999998", "551199999993"],
  enderecos: [
    {
      rua: "Rua Joseph Climber",
      numero: "45",
      complemento: "apto 43",
    },
    {
      rua: "Rua Dom Manoel da Costa",
      numero: "40",
      complemento: "apt 502",
    },
  ],
}

estudante.enderecos.push({
    rua: 'Rua Dona Clotilde',
    numero: '100',
    complemento: ''
})

// console.log(estudante.enderecos);

const listaEnderecosComComplementor = estudante.enderecos.filter((enderecos) => enderecos.complemento)
// Filtra o Array que tem determinada coisa, nesse caso que tenha complemento

console.log(listaEnderecosComComplementor);