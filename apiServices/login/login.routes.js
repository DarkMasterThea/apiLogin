'use strict'
const express = require('express')
const controller = require('./login.controllers')
const router = express.Router()

router.post('/', controller.loginClient)

module.exports = router