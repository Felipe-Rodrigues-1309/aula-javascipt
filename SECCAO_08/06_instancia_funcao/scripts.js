function criarCarro(marca, portas, modelo, cor){ // determina as propiedade do objeto criarcarro
    let carro = Object.create({}); 
    carro.marca = marca;
    carro.portas = portas;
    carro.modelo = modelo;
    carro.cor = cor;
    return carro; 
}

let gol = criarCarro('gol', '4', 'wolvagem', 'branco');

console.log(gol);

console.log(gol.marca);
console.log(gol.portas);
console.log(gol.modelo);
console.log(gol.cor);

