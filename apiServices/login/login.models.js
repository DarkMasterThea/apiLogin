'use strict'
const loginDao = require('./login.dao')

const getClientByEmail = async (data) =>{
    return loginDao.getClientByEmail(data)
}

module.exports = {
    getClientByEmail
}



