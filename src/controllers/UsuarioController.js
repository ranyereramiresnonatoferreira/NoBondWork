const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const auth = require('../auth')
// Configuração do JWT
const secretKey = 'your_secret_key'; // Substitua com uma chave secreta segura

// Função para gerar um token
function generateToken(usuario) {
    return jwt.sign({ id: usuario.id, login: usuario.login }, secretKey, { expiresIn: '1h' });
}

// Serviço de autenticação (você pode manter a lógica aqui ou mover para um serviço separado)
const usuarioService = require('../services/UsuarioService');

router.post('/login', async (req, res) => {
    const { login, senha } = req.body;
    const usuario = await usuarioService.findByLogin(login, senha);

    if (usuario) {
        // Gere o token JWT
        const token = generateToken(usuario);
        res.json({ token });
    } else {
        res.status(401).send('Login ou senha incorretos');
    }
});

router.get('/protected', auth.authenticateToken, (req, res) => {
    res.json({
        message: 'Você acessou uma rota protegida!',
        user: req.user // Informações do usuário decodificadas do token
    });
});



module.exports = router;