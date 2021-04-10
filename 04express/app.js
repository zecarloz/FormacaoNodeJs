// Importar o Express
var express = require(`express`);

//Criando a variavel para ter acesso a funcionalidades do Express
var app = express();

//Rota
app.get(`/`,function(req , res){
    res.write(`Utilizando o Express`);
    res.end();
});

// Servidor
app.listen(8080);