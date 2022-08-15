const Sequelize = require('sequelize')
const sequelize = new Sequelize ('sistemaDeCadastro', 'root', 'io312',{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado")
}).catch(function(){
    console.log("Falha ao tentar conexão" +Error)
})