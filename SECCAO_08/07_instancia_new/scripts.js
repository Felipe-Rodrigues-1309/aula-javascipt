function Cachorro(raca){
    this.raca = raca;
}

let husky = new Cachorro('husky');

console.log(husky.raca);





// segundo exemplo

function felipe(nome, idade, cpf){
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
};

let rodrigues = new felipe('felipe', '28', '05307353340');
console.log(rodrigues);
console.log(rodrigues.nome);
alert(rodrigues.cpf);
console.log(rodrigues.idade);
