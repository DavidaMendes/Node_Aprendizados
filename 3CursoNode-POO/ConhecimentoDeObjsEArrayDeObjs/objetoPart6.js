// Se utilizarmos de duplicação base em um objeto tipo assim:
// const obj2 = obj1;
// isso vai dar errado e qualquer alteração vai modificar os dois, isso é prejudicial ao código, para isso não acontecer e eu apenas clonar, utilizamos desse metodo:
const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20",
}

const objPersonagem2 = Object.create(objPersonagem);
objPersonagem2.nome = "Saruman";

console.log(objPersonagem.nome); //Gandalf
console.log(objPersonagem2.nome); //Saruman

// O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via parâmetro. Dessa forma, objPersonagem2 é uma instância diferente de objPersonagem e pode ser trabalhada de forma independente.