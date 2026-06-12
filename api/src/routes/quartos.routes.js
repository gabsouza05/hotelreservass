const express = require("express");

const router = express.Router();

const quartoController = require("../controllers/quartos.controller");

router.get("/listar", quartoController.listar);

router.post("/cadastrar", quartoController.cadastrar);

router.delete("/excluir/:id", quartoController.excluir);

module.exports = router;