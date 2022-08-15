const express = require("express");
const app = express();

app.use(express.json());

const cliente = [];

app.get("/", function(req, res){
    res.json({ message: "Você acessou minha API"
    });
});

app.get("/sobre", function(req, res){
    res.send("Sobre");
});

app.post("/cliente", function(req, res){
    console.log(req.body);
    return res.json("Acesso API do tipo POST")
});

app.listen(3000,function(){
    console.log("Servidor rodando na url http://localhost:3000/clientes");
});