/**
 * Entrada do sistema de abertura de conta
 */
const prompt = require("prompt-sync")();
const ContaCorrente = require("./ContaCorrente");
const ContaPoupanca = require("./ContaPoupanca");

const txJuros = 0.1225; //taxa de juros bancarios
const rendimento = 0.005713; //rendimento da poupança

function criarConta(op) {
  const nome = prompt("Informe o nome do titular: ");
  const idade = parseInt(prompt("Informe a idade: "));
  const sexo = prompt("Informe o sexo: ");
  const abreConta = parseFloat(
    prompt("Informe o valor de abertura da conta: ")
  );
  if (op == 1) {
    const cc = new ContaCorrente(nome, idade, sexo, abreConta, txJuros);
    console.clear();
    cc.validar();
    cc.padronizar();
    cc.extrato();
    cc.aplicarJuros();
    cc.extrato();
    cc.depositar(50);
    cc.sacar(30);
    cc.extrato();
  } else if (op == 2) {
    const cp = new ContaPoupanca(nome, idade, sexo, abreConta, rendimento);
    console.clear();
    cp.validar();
    cp.padronizar();
    cp.extrato();
    cp.aplicarRendimento();
    cp.extrato();
    cp.depositar(30);
    cp.sacar(10);
    cp.extrato();
  }
}

//A seguir damos a opção de abertura de Conta-Corrente ou Conta-Poupança
const op = prompt("Escolha 1 para Conta-Corrente ou 2 para Poupança");
criarConta(op); //Uma função é chamada para abertura da conta
