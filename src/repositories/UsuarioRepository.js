const pool = require('../db');
const UsuarioModel = require('../models/UsuarioModel');

class UsuarioRepository {
    async findByLogin(login, senha) {
        const query = 'SELECT * FROM usuario WHERE login = $1 and senha = $2';
        const result = await pool.query(query, [login, senha]);
        const row = result.rows[0];
        if (row) {
            return new UsuarioModel(row.id, row.login, row.senha, row.nome, row.cpf, row.email, row.tipousuario);
        } else {
            return null;
        }
    }
}

module.exports = new UsuarioRepository();