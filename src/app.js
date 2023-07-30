require("dotenv").config();
const express = require('express'); // Importando o express.
const cors = require('cors');
const router = express.Router()

const tecnicasRoutes = require('./routes/tecnicasRoute.js')  // Importa as rotas.
const mongoose = require('./database/dbConnect.js')

const app = express();

mongoose.connect();

app.use(express.json());
app.use(cors());

app.use('/', cors(), tecnicasRoutes)  // Rota raiz.

const swaggerUi = require('swagger-ui-express');

    const swaggerFile = require('../swagger/swagger_output.json');

    app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Exportando para usar o server.js
module.exports = app