const express = require('express');
const bodyParser = require('body-parser');
const usuarioController = require('./controllers/UsuarioController');

const app = express();
app.use(bodyParser.json());

app.use('/api/usuarios', usuarioController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});