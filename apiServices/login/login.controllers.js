'use strict'
const loginModel = require('./login.models')
const loginDto = require('./login.dto')
const {response} = require('../../helpers/response')
const {validateLogin} = require('./helpers/login.helper')
const bcrypt = require("bcrypt");

const login = async (rq,rs)=>{
    const data = rq.body
    const {email, password} = data
    let isNull = validateLogin(data)
    if (isNull) return rs.status(200).send(response(false, undefined, 'Wrong Password'))
    const res = await loginModel.getUser(email);
    if (res.length===0){
        return rs.status(200).send(response(false, undefined, 'Wrong Email'))
    } else {
        const user = JSON.parse(JSON.stringify(res[0]));
        bcrypt.compare(password, user.password, function (err, match) {
            if(match){
                return rs.status(200).send(response(true, loginDto.single(user), 'Data validated'))
            }
            return rs.status(200).send(response(false, undefined, 'Wrong Password'))
        });
    }
}
module.exports = {
    login
}