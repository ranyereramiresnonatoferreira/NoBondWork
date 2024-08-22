const express = require('express');
const bodyParser = require('body-parser');
const usuarioController = require('./controllers/UsuarioController');
const eventoController = require('./controllers/EventoController');
const vagaController = require('./controllers/VagaController');
const solicitacaoController = require('./controllers/SolicitacaoController');
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
  };
const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/api/usuarios', usuarioController);
app.use('/api/protected', usuarioController);
app.use('/api/eventos', eventoController);
app.use('/api/vagas', vagaController);
app.use('/api/solicitacoes', solicitacaoController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});