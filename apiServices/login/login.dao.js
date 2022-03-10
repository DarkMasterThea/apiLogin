'use strict'
const {pool} = require('../../services/database/database')

const getUser = async (value) =>{
    return await pool.query('SELECT * FROM Users WHERE username=?', [value]);
}

module.exports = {getUser}