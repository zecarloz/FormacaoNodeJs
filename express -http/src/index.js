const app = require('express')();
const bodyParser = require('body-parser');
/* Treinamento em desenvolvimento com Node.js */
app.use(bodyParser.json());

let clients = [
    {id: 3, nome: 'Jose carlos', telefone: '53981560355'},
    {id: 1, nome: 'Jucelia souza', telefone: '53981560356'},
    {id: 2, nome: 'Fabricio souza', telefone: '53981560357'},
    {id: 4, nome: 'Gustavo souza', telefone: '53981560358'},
]

/**
 * Retorna todos clientes em json
 */
app.get('/clients', (request, response) => response.json(clients))

/**
 * Buscar UM único recurso
 */
app.get('/clients/:id', (request, response) =>
response.json(clients.filter(value => value.id == request.params.id)))

/**
 * Inserir dados no servidor - BD
 */
app.post('/clients', (request, response) =>{
    const client = request.body;
    clients.push(client);
    response.json(client);
})

/**
 * Atualizar nome de clientes
 */
app.put('/clients/:id', (request, response) => {
    const id = request.params.id;
    const nome = request.body.nome;

    let client = clients.filter(value => value.id == id);

    client[0].nome = nome;

    response.json(client[0]);
})

app.delete('/clients/:id', (request, response) => {
    const id = request.params.id;
    clients = clients.filter(value => value.id != id);
    response.json(clients);
})

app.listen(3000);
