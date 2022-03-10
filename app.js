'use strict'

const config = require('config')
const express = require('express')
const PORT = config.get('app.PORT') || 3000
const {notification, font} = require('./services/beautification/beautification')
const bodyparser = require('body-parser')
const routes = require('./routes/module.routes')
const app = express()

app.listen(PORT, ()=>{
    notification('Welcome Paolo','Cola',100)
})

app.use(bodyparser.json({limit: '50mB',extended: true}))
app.use(bodyparser.urlencoded({extended: true}))
app.use('/v1',routes)

module.exports = app;