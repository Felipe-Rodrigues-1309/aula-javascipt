class Conta {
  // definição de classe (syntactic sugar sobre funções construtoras/protótipos)
  constructor(saldo) {
    // método especial chamado na criação da instância
    // 'saldo' é o valor inicial passado para a conta
    this.saldo = saldo; // armazena o saldo inicial na propriedade 'saldo' do objeto
  }
  deposito(valor) {
    // método da instância para adicionar dinheiro ao saldo
    this.saldo += valor; // incrementa a propriedade 'saldo' pelo 'valor' fornecido
  }

  saque(valor) {
    this.saldo -= valor;
  }
}

let conta = new Conta(1000);
// cria uma nova instância de Conta com saldo inicial 1000
// 'conta' agora é um objeto com a propriedade 'saldo' e o método 'desposito'

conta.deposito(1000);
// chama o método 'desposito' da instância para somar 1000 ao saldo atual

console.log(conta.saldo);
// mostra no console o saldo atual da conta (1000 inicial + 1000 depositado = 2000)

conta.saque(890);

console.log(conta.saldo);
