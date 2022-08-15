const array1 = [25, 45, 30]
let clientes = {
    nome: "maria",
    rg: "6.090.000"
}
//imprime os valores do array
for (const e of array1) {
    console.log(e);
}
//imprime as propriedades do obj
for (let dados in clientes){
    console.log(dados + ":"+ clientes[dados]);
}