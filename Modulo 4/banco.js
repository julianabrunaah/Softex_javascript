var Banco = {saldo: 1500, conta: "58585-0", agencia: "0441", tipo: "Corrente", nome: "Juliana"}

mostrarSaldo = function ValorSaldo(){
    console.log("SALDO " + Banco.saldo);
}
dadosConta = function dadosConta(){
    console.log("* "+Banco.nome,"*\nAgência "+Banco.agencia, "\nConta "+Banco.tipo, "\n"+Banco.conta);
}
saqueConta = function saqueConta(){
    Banco.saldo -= 200
    console.log("Saque no valor de R$200,00 realizado com sucesso! \nSaldo atual " +Banco.saldo);
}
depositoConta = function depositoConta(){
    Banco.saldo += 153
    console.log("Deposito no valor de R$153,00 realizado com sucesso! \nSaldo atual " +Banco.saldo);
}

dadosConta()
mostrarSaldo()
saqueConta()
depositoConta()


