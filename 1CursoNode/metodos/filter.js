const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

// Filter é diferente de include, include volta um true ou false de uma condição, vendo se ele esta ou não no array por exemplo, o filter ele retorno oque é desejado
// Ele retorna nome menores que 4 letras, ele usa dos conceitos do include mas adiciona o retorno necessário


const reprovados = alunos.filter((_, i) => {
    return medias[i] < 7;
})

// Essa função callback usa do indice, usa para associar mais de um array como se fosse o indexOf.
console.log(reprovados);