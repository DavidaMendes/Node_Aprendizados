const notas = [10, 6, 8];
notas.push(7); // Adiciona no final do Array
console.log(notas);
notas.pop(); // Remove no final do Array
console.log(notas);
const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];


const sala1 = listaEstudantes.slice(0, listaEstudantes.length/2); 

// Corta o Array até o número desejado ([Inicio], [Fim]) -> O elemento exato do fim do array não é incluido, no caso o indice 10 não foi inlcuido (0 - 9)

const sala2 = listaEstudantes.slice(listaEstudantes.length/2); 

// Corta o Array até o número desejado ([Inicio], [Fim])

console.log(sala1); // Metodo que salva um novo Array
console.log(sala2);

const sala3 = ['João','Ana','Caio','Marjori','Leo'];

sala3.splice(1, 2, 'Rodrigo'); 

// ([Start], [Quantos elemento vão ser deletados a partir do indice], [Adiciona elemento logo no indice inicial])

console.log(sala3);

const sala4 = ['Rivaldo','Camis','Mari'];
const sala5 = ['Ju','Sofia','Raquel'];

const salaUnidas = sala4.concat(sala5); // Retorna um novo array que une os elementos nessa ordem