const express = require('express');
const solicitacaoService = require('../services/SolicitacaoService');
const router = express.Router();
const auth = require('../auth')

// Adicionar nova solicitação
router.post('/', auth.authenticateToken, async (req, res) => {
    try {
        const solicitacao = req.body;
        const idResponsavel = req.user.id;
        solicitacao.idUsuario = 0;
        solicitacao.idUsuario = idResponsavel;
        const novaSolicitacao = await solicitacaoService.add(solicitacao);
        res.status(201).json(novaSolicitacao);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Deletar uma solicitação
router.delete('/:id', auth.authenticateToken, async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const solicitacao = await solicitacaoService.delete(id);
        res.status(200).json(solicitacao);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Atualizar uma solicitação
router.put('/:id', auth.authenticateToken, async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const solicitacao = req.body;
        const solicitacaoAtualizada = await solicitacaoService.update(id, solicitacao);
        res.status(200).json(solicitacaoAtualizada);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Obter solicitações por IdEvento
router.get('/evento/:idEvento', auth.authenticateToken, async (req, res) => {
    try {
        const idEvento = parseInt(req.params.idEvento, 10);
        const solicitacoes = await solicitacaoService.getByIdEvento(idEvento);
        res.status(200).json(solicitacoes);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/usuario', auth.authenticateToken, async (req, res) => {
    try {
        const idResponsavel = req.user.id; // Extraído do token
        if (!idResponsavel) {
            return res.status(401).json({ error: 'ID do responsável não encontrado no token' });
        }
        const solicitacoes = await solicitacaoService.getByIdUsuario(idResponsavel);
        res.status(200).json(solicitacoes);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;