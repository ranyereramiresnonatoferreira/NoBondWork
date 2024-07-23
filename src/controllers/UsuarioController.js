const usuarioService = require('../services/UsuarioService');
const express = require('express');
const router = express.Router();

router.post('/login', async (req, res) => {
    const { login, senha } = req.body;
    const usuario = await usuarioService.login(login, senha);
    if (usuario) {
        res.json(usuario);
    } else {
        res.status(401).send('Login ou senha incorretos');
    }
});

module.exports = router;