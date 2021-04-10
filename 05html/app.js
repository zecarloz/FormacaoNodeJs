// Importar o Express
var express = require(`express`);

//App
var app = express();

//Rotas
app.get(`/`, function(req,res){
    res.sendFile(__dirname + `/pagina.html`);
});

//Servidor
app.listen(8080);