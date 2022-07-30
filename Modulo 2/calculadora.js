function calcular(valor1, valor2, operacao){
    if(operacao === "+"){
        return +valor1 + +valor2
    }
    else if (operacao === "-"){
        return +valor1 - +valor2
    }
    else if (operacao === "/"){
        return +valor1 % +valor2
    }
    else if (operacao === "*"){
        return +valor1 * +valor2
    }
    else{
        print("Dados invalidos");
    }
}
var valor1 = 5;
var valor2 = 7;
var operacao = "/";
var result = calcular(valor1,valor2,operacao)
console.log("Resultado =" +result)
