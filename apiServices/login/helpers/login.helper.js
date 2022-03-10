'use strict'

const validateLogin = (data)=>{
    const { name, lastName, email, password,
        phone, role, dni, country, birth,
        gender} = data
    return !email || !password;
}

module.exports = {
    validateLogin
}