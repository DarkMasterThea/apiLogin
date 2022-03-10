'use strict'
const loginDao = require('./login.dao')

const getUser = async (data) =>{
    return loginDao.getUser(data)
}

module.exports = {
    getUser
}



