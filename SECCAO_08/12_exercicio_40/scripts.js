class conta {
  constructor(saldoContaCorrente, saldoContaPoupanca, jurusPoupanca) {
    this.saldoContaCorrente = saldoContaCorrente;
    this.saldoContaPoupanca = saldoContaPoupanca;
    this.jurusPoupanca = jurusPoupanca;
  }

  novoValornaConta(valor) {
    this.saldoContaCorrente += valor;
  }

  novovalordininui(diminui) {
    this.saldoContaCorrente -= diminui;
  }

  tranferenciaContapoupanca(valor) {
    this.saldoContaCorrente -= valor;
    this.saldoContaPoupanca += valor;
  }
}

let conta1 = new conta(50, 60, 10);

conta1.novoValornaConta(100);

console.log(conta1);

conta1.novovalordininui(1);

console.log(conta1);

conta1.tranferenciaContapoupanca(100);

console.log(conta1);
