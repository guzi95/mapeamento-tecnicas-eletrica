const jsonArchive = require('../models/tecnicos_eletrica.json')
const express = require('express')
const app = express()
app.use(express.json())

const getAll = (request, response) => {
    response.status(200).json([{
        'profissionais': 
    }])
}