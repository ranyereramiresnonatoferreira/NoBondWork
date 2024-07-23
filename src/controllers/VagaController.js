const express = require('express');
const vagaService = require('../services/VagaService');
const router = express.Router();
const auth = require('../auth')

// Adicionar nova vaga
router.post('/', auth.authenticateToken, async (req, res) => {
    try {
        const vaga = req.body;
        const novaVaga = await vagaService.add(vaga);
        res.status(201).json(novaVaga);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Deletar uma vaga
router.delete('/:id', auth.authenticateToken, async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const vaga = await vagaService.delete(id);
        res.status(200).json(vaga);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Atualizar uma vaga
router.put('/:id', auth.authenticateToken, async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const vaga = req.body;
        const vagaAtualizada = await vagaService.update(id, vaga);
        res.status(200).json(vagaAtualizada);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Obter vagas por IdEvento
router.get('/evento/:idEvento', auth.authenticateToken, async (req, res) => {
    try {
        const idEvento = parseInt(req.params.idEvento, 10);
        const vagas = await vagaService.getByIdEvento(idEvento);
        res.status(200).json(vagas);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;