/**
 * Classe de conta corrente filha de classe genérica Conta
 */
const Conta = require("./Conta");

class ContaCorrente extends Conta {
  constructor(nome, idade, sexo, saldo = 0, juros) {
    Conta.idConta++;
    super(nome, idade, sexo, saldo);
    this.juros = juros;
  }
  aplicarJuros() {
    this.saldo += this.saldo * this.juros;
  }
}

module.exports = ContaCorrente;
