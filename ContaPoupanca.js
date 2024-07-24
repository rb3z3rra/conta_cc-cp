/**
 * Classe de conta poupança, filha de classe genérica Conta
 */
const Conta = require("./Conta");

class ContaPoupanca extends Conta {
  constructor(nome, idade, sexo, saldo = 0, rendimento) {
    Conta.idConta++;
    super(nome, idade, sexo, saldo);
    this.rendimento = rendimento;
  }

  aplicarRendimento() {
    this.saldo += this.saldo * this.rendimento;
  }
}

module.exports = ContaPoupanca;
