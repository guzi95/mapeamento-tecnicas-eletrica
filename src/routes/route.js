const controllers = require('../controllers/controller.js')

const express = require('express')
const {Router} = require('express')

Router.get('/catalogo', controllers.getAll)