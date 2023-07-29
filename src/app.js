const express = require('express'); // Importando o express.
const cors = require("cors");

const mongoose = require('./database/dbConnect')
const routes = require('./routes/route.js')  // Importa as rotas.

app.use(express.json());
app.use(cors());
mongoose.connect();

app.use('/rotaRaiz', routes)  // Rota raiz.

// Exportando para usar o server.js
module.exports = app