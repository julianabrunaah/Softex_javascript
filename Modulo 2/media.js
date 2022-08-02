function media(n1, n2){
    var n3 = 21 - (n1 += n2)
    return n3
}
var result = media(n1, n2)
console.log("Para passar com media 7 é preciso tirar " +result, " na sua proxíma prova")


function situacaoaluno(n1, n2,n3s){
    n2 += n3s;
    n1 += n2;
    var mediaAluno = n1 /3
   var sitAluno = (mediaAluno >= 7 ? "Aprovado" : "Reprovado")
    return sitAluno
}
var n1 = 6;
var n2 = 7;
var n3s = 8;
var result = situacaoaluno(n1, n2,n3s)
console.log("Situação =  " +result)
