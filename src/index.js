const { request, response } = require('express');
const express = require ('express');

const app = express();

app.get('/' , (request,response)=>{
    response.json({mensagem: 'Hello ,  express with Json'});
})

app.listen(3000);


