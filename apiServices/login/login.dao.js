'use strict'
const {pool} = require('../../services/database/database')
const getClientByEmail = async (value) =>{
    return new Promise((res,rej)=>
        pool.query('SELECT * FROM Users;',(err,data)=>{
            if (err) return rej(err)
            return res(data)
        })
    )
}

module.exports = {getClientByEmail}