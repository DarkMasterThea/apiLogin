'use strict'
const loginModel = require('./login.models')
const loginDto = require('./login.dto')
const {response} = require('../../helpers/response')
const {validateLogin} = require('./helpers/login.helper')
const bcrypt = require("bcrypt");
const {pool} = require("../../services/database/database");


const loginClient = async (rq,rs)=>{
    const data = rq.body
    const {email, password} = data
    let isNull = validateLogin(data)
    if (isNull) return rs.status(200).send({message: "Data Invalid"})
    const res = await pool.query('SELECT * FROM Users WHERE username=?', [email]);
    const user = JSON.parse(JSON.stringify(res[0]));
    bcrypt.genSalt(12, function(err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            if (err) return rs.send(response(true, undefined, 'ErrorServer'))
            if (user.password===hash) {
                return rs.send(response(true, loginDto.single(user), 'Login'))
            } else {
                return rs.send(response(false, undefined, 'Wrong Password'))
            }
        });
    });
}
module.exports = {
    loginClient
}