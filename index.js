const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser')
const userRouter = require('./routes/user.router')

mongoose.connect('mongodb://localhost:27017', {
  useFindAndModify: true,
  useNewUrlParser: true,
  dbName: 'la_placita'
}, err => {
  if (err)console.log(`Error conectando a mongo. ${err.message}`)
})

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.get('/', function (request, response) {
  response.send('Hola')
})

app.use('/users', userRouter)

app.listen(PORT, function (Error) {
  if (Error) {
    console.log(Error.message)
  }
  console.log('Server Runing on port: 3000')
})
