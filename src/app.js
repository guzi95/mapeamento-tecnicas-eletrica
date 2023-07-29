const express = require('express') // Importa o express.
const app = express()  // Executa o express.
app.use(express.json())  // uso o body parse.

const songsroutes = require("./routes/routes")  // Importa as rotas de músicas.
app.use("reprogramafy/playlist", songsRoutes)  // Definiu rota padrão para músicas

const podcastsRoutes = require("./routes/podcastsRoutes")
app.use("/reprogramafy/podcasts", podcastsRoutes)

module.exports = app