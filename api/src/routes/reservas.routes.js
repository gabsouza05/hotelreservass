const express = require("express");

const router = express.Router();

const reservaController = require("../controllers/reservas.controller");

router.get("/listar", reservaController.listar);

router.post("/cadastrar", reservaController.cadastrar);

router.delete("/excluir/:id", reservaController.excluir);

module.exports = router;