class Carro {
  constructor(marca, cor, gasolinaRestante, consumo) {
    // marca do carro (string)
    this.marca = marca;
    // cor do carro (string)
    this.cor = cor;
    // litros de gasolina atualmente no tanque (number)
    this.gasolinaRestante = gasolinaRestante;
    // consumo do carro em km por litro (number)
    this.consumo = consumo;
  }

  // método para simular dirigir uma certa distância em km
  dirigir(km) {
    // calcula litros consumidos: km dividido pelo consumo (km/l)
    let litrosConsumidos = km / this.consumo;

    // subtrai do combustível restante
    this.gasolinaRestante -= litrosConsumidos;
  }
}

let carro = new Carro("gol", "azul", 1000, 14);

// mostra o estado inicial do objeto
console.log(carro);

// dirige 100 km (reduz gasolinaRestante)
carro.dirigir(100);

// mostra o estado após dirigir
console.log(carro);
