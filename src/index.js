const express = require('express');
const bodyParser = require('body-parser');
const usuarioController = require('./controllers/UsuarioController');
const eventoController = require('./controllers/EventoController');

const app = express();
app.use(bodyParser.json());

app.use('/api/usuarios', usuarioController);
app.use('/api/protected', usuarioController);
app.use('/api/eventos', eventoController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});