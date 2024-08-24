const eventoService = require('../services/EventoService');
const express = require('express');
const router = express.Router();
const auth = require('../auth')

// Adicionar um novo evento
router.post('/', auth.authenticateToken, async (req, res) => {
    try {
        const evento = req.body;
        evento.idResponsavel = 0;
        evento.idResponsavel = req.user.id
        const novoEvento = await eventoService.add(evento);
        res.status(201).json(novoEvento);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Atualizar um evento por ID
router.put('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const evento = req.body;
        const eventoAtualizado = await eventoService.update(id, evento);
        if (eventoAtualizado) {
            res.status(200).json(eventoAtualizado);
        } else {
            res.status(404).json({ error: 'Evento não encontrado' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Obter um evento por ID
router.get('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const evento = await eventoService.getById(id);
        if (evento) {
            res.status(200).json(evento);
        } else {
            res.status(404).json({ error: 'Evento não encontrado' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Deletar um evento por ID
router.delete('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const eventoDeletado = await eventoService.delete(id);
        if (eventoDeletado) {
            res.status(200).json(eventoDeletado);
        } else {
            res.status(404).json({ error: 'Evento não encontrado' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/', auth.authenticateToken, async (req, res) => {
    try {
        const idResponsavel = req.user.id; // Extraído do token
        if (!idResponsavel) {
            return res.status(401).json({ error: 'ID do responsável não encontrado no token' });
        }

        const eventos = await eventoService.getByIdResponsavel(idResponsavel);
        res.status(200).json(eventos);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Nova rota para obter todos os eventos
router.get('/all', auth.authenticateToken, async (req, res) => {
    try {
        const eventos = await eventoService.getAll();
        res.status(200).json(eventos);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;