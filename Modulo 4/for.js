const array1 = [25, 45, 30]
let clientes = {
    nome: "maria",
    rg: "6.090.000",
    dataNascimento: "08/07/1998"
}
//imprime os valores do array
function forOf (){
    for (const e of array1) {
        console.log(e);
    }
}
//imprime as propriedades do obj
function forIn(){
    for (let dados in clientes){
        console.log(dados + ":"+ clientes[dados]);
    }
}

forIn()
forOf()