'use strict'
const config = require('config')
const mysql = require('mysql')
const database = config.get('mysql')
const {promisify} = require('util')
const {PORT,HOST, PASSWORD, NAME, DATABASE, TABLE} = database

const pool = mysql.createPool(database)

pool.getConnection((err,con)=>{
    if (!err){
        console.log('*****SUCCESSFUL DATABASE CONNECTION*****')
    } else {
        console.error(err)
        console.log('*****UNSUCCESSFUL DATABASE CONNECTION *****')
    }
})

pool.query= promisify(pool.query)
module.exports = {pool}