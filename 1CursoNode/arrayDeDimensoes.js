const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];
alunos.push('Rodrigo');
const lista = [alunos, medias]; 
for(let i = 0; i < alunos.length; i++){
    if(lista[1][i] == null){
        lista[1][i] = 0;
    }
    console.log(
        `a aluna da posição 1 da lista é: ${lista[0][i]}.
        a nota dessa aluna é ${lista[1][i]}`
        );
}