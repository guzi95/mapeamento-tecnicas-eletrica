const controllers = require('../controllers/controller.js')

const express = require('express')  // Importando express.
const router = express.Router()  // Funcao de rotas do express.

// Router. metodo http (rota, funcao)

router.get("/all", controller.getAllTecnicas);
router.get("/:id", controller.getTecnicaById);
router.post("/new", controller.addNewTecnicas);
router.patch("/:id", controller.updateTecnicaById);
router.delete("/:id", controller.deleteTecnica);

// Exportando as rotas.
module.exports = router;