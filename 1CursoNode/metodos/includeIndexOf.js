const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibieNomeENota(aluno){
    if(lista[0].includes(aluno)){
        const [alunos, medias] = lista; 
        // Desestruturação -> ela pega os arrays da lista e cria como se fosse variavel

        // Includes vê se tem a variavel na lista

        const indice = alunos.indexOf(aluno);

        // Acha o indice do atributo na lista
        
        const mediaAluno = medias[indice];
        console.log(`${aluno} tem a média ${mediaAluno}`);
    }else{
        console.log('Estudante não existe');
    }
}

exibieNomeENota('Juliana');
exibieNomeENota('Vini');