'use strict'
const express = require('express')
const login = require('../apiServices/login/login.routes')
const router = express.Router()

router.use('/login',login)

module.exports = router