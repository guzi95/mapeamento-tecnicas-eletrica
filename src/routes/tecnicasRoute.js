const controllers = require('../controllers/controller.js')

const express = require('express')  // Importando express.
const router = express.Router()  // Funcao de rotas do express.

// Router. metodo http (rota, funcao)

router.get('/', (req, res) => {
    res.status(200).send({
        status: "Connected"
    })
})

router.get("/all", controllers.getAllTecnicas);
router.get("/:id", controllers.getTecnicaById);
router.post("/new", controllers.addNewTecnicas);
router.patch("/:id", controllers.updateTecnicaById);
router.delete("/:id", controllers.deleteTecnica);

// Exportando as rotas.
module.exports = router;