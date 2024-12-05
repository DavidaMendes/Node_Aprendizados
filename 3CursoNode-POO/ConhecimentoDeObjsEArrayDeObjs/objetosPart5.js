// Adicionar funções altera no comportamento do objeto -> Metodo

const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "12312312312",
  turma: "JavaScript",
  bolsista: true,
  telefones: ["551199999998", "551199999993"],
  media: 7.5,
  estaAprovado: function (mediaBase) {
    return this.media >= mediaBase ? true : false;
  },
};

// Arrow Function: Não entende o contexto, com o this
// this: como se eu tivesse me referencia a "eu mesmo", propriedade dentro do proprio objeto -> em DOM quando se usa this, quer dizer sobre a propriedade do que esta se referindo

console.log(estudante.estaAprovado(7));

const pessoa = {
  nome: "Maria",
  idade: 30,
  apresentar: function () {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  },
}

pessoa.apresentar(); // Saída: Olá, meu nome é Maria e eu tenho 30 anos.
