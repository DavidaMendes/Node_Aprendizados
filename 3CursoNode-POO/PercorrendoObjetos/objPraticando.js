const carro = {
    nome: "Kwid",
    marca: "Renault", 
    cor: "Vermelha",
    ano: 2020,
    ativo: true,
    ativarOuDesativar: function (){
        this.ativo = !this.ativo;
        return this.ativo;
    }
}

console.log(carro);
console.log(carro.ativarOuDesativar());
console.log(carro);

function obterDetalhes(carro){
    const newCar = Object.entries(carro);
    for(const [chave, valor] of newCar){
        if (typeof valor !== 'function') { 
            console.log(`${chave} : ${valor}`);
        }
    }
}

obterDetalhes(carro);
