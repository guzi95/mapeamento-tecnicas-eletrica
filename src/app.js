const express = require('express'); // Importando o express.
const cors = require("cors");

const mongoose = require('./database/dbConnect')
const tecnicasRoutes = require('./routes/tecnicasRoute.js')  // Importa as rotas.

app.use(express.json());
app.use(cors());
mongoose.connect();

app.use('/rotaRaiz', tecnicasRoutes)  // Rota raiz.

// Exportando para usar o server.js
module.exports = app