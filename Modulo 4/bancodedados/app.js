const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Bem-vindo ao api");
});




app.listen(8080, function (req, res){
    console.log("Servidor rodando")
});