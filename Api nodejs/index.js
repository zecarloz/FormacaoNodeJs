const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extend: false}))
app.use(express.json())
app.use(cors())

let db = [
    {'1' : {Nome: 'cliente 1', Idade:'20'}},
    {'2' : {Nome: 'cliente 2', Idade:'20'}},
    {'3' : {Nome: 'cliente 3', Idade:'20'}}
]
// buscar dados
app.get('/' , (req,res) => {
    return res.json(db)
})
// inserir dados
app.post('/add' , (req,res) => {
   const body = req.body

   if(!body)
    return res.status(400).end()
  db.push(body)
  return res.json(body)  
})



app.listen(21262, () => {
    console.log('Express started at http://localhost:21262')
})

//33''