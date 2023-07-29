const express = require('express'); // Importando o express.
const cors = require('cors');

const tecnicasRoutes = require('./routes/tecnicasRoute.js')  // Importa as rotas.
const mongoose = require('./database/database.js')

const app = express();

app.use(express.json());
app.use(cors());
mongoose();

app.use('/cadastros/tecnicas', tecnicasRoutes)  // Rota raiz.

// Exportando para usar o server.js
module.exports = app