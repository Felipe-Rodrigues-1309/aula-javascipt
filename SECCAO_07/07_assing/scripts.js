let carro = {
    cor: 'branco',
    portas: '4',
    rodas: '4',
}

let opcionais = {
ar_condicionado: true,
direcao: true,
}

console.log(carro);

Object.assign(carro, opcionais);

console.log(carro);


