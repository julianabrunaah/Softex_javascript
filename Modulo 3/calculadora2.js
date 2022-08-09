//função com parâmetros e retorno de valor 
function calcularNota(total, erros){
    result = total - erros
    return result
}
var total = 10;
var erros = 3;
var result = calcularNota(total, erros)
console.log("Nota da prova = " +result)

//função sem parâmetros
function txt(){
    console.log("Resultado da nota 1º prova = 8 \nResultado da nota 2º prova = " +result)
}
txt()

//arrow function para calcular a média
const media = ([n1, n2] = [result, 8]) => "Resultado média final " + (n1 + n2)/2;
console.log(media())
