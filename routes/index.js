const express = require('express')
const app = express()

const users = require('./usersRoutes')

app.use(express.json())

module.exports = app =>{
    app.use(express.json())
    app.use(users)
    app.get('/', (req, res) => res.send('API Burguer Queen'))
    
}

//quando fala que esse arquivo servirá como um intermediário, significa um middleware?