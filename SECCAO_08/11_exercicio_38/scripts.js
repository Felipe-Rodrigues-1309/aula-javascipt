class Endereco {
  constructor(rua, bairro, cidade, estado) {
    // parâmetros do construtor: valores recebidos ao criar uma instância
    this.rua = rua; // armazena o valor do parâmetro 'rua' na propriedade 'rua' do objeto
    this.bairro = bairro; // armazena o valor do parâmetro 'bairro' na propriedade 'bairro'
    this.cidade = cidade; // armazena a cidade na propriedade 'cidade'
    this.estado = estado; // armazena o estado na propriedade 'estado'
  }

  set novaRua(novaRua) {
    this.rua = novaRua;
  }

  set novoBairro(novoBairro) {
    this.bairro = novoBairro;
  }
}

let enderecos = new Endereco("ruas das gaiovotas", "centro", "sobral", "ceara");
// cria uma nova instância de Endereco usando o operador 'new'

console.log(enderecos); // antes das alterações

// CORRETO: usar os setters no objeto, sem reatribuir 'enderecos'
enderecos.novaRua = "rua teste";
enderecos.novoBairro = "bairro teste";

console.log(enderecos); // mostra o objeto atualizado
