//Importar o modulo http
var http = require(`http`);

//Criar o servidor
http.createServer(function(req , res){
    res.write(`Aprendendo node.js`);
    res.end();
}).listen(8080);