"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const controllers_1 = __importDefault(require("./controllers"));
const router = express.Router();
router.get('', controllers_1.default.obtemTarefasController);
router.get(':idTarefa/', controllers_1.default.obtemTarefaController);
router.post('', controllers_1.default.addTarefaController);
router.put(':idTarefa/', controllers_1.default.atualizaTarefaController);
router.patch(':idTarefa/', controllers_1.default.mudaEstadoTarefaController);
router.delete(':idTarefa/', controllers_1.default.removeTarefaController);
exports.default = router;
