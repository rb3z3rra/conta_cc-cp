/**
 * Classe pai genérica de conta bancária
 */
const regNome = /[\d]/; // Expressão regular para detectar números
const regNum = /-\d+/; // Expressão regular para números negativos

class Conta {
  static idConta = 0;
  constructor(nome, idade, sexo, saldo = 0) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.saldo = saldo;
  }
  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    this.saldo -= valor;
  }

  extrato() {
    console.log("Número da Conta    -->", Conta.idConta);
    console.log("Titular            --", this.nome);
    console.log("Saldo              --", this.saldo);
    console.log("########################################");
  }

  validar() {
    if (!this.nome) {
      throw new Error("Um nome deve ser preenchido!");
    } else if (regNome.test(this.nome)) {
      throw new Error("O nome deve conter apenas letras!");
    } else if (regNum.test(this.idade)) {
      throw new Error("Preencha uma idade válida!");
    } else if (regNum.test(this.saldo)) {
      throw new Error("O saldo não pode iniciar negativado!");
    } else if (!this.sexo) {
      throw new Error("O sexo do cliente deve ser preenchido!");
    } else if (regNome.test(this.sexo)) {
      throw new Error("O sexo deve conter apenas letras!");
    }
  }

  padronizar() {
    this.nome = this.nome.toString().toUpperCase();
    this.sexo = this.toString().toUpperCase();
  }
}

module.exports = Conta;
