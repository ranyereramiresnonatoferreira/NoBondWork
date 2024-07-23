const pool = require('../db'); // Certifique-se de que o caminho está correto
const SolicitacaoModel = require('../models/SolicitacaoModel');

class SolicitacaoRepository {
    async add(solicitacao) {
        const query = `
            INSERT INTO solicitacoes (IdEvento, IdUsuario, ValorOferecido, Mensagem, IdStatus)
            VALUES ($1, $2, $3, $4, $5) RETURNING *
        `;
        const values = [solicitacao.idEvento, solicitacao.idUsuario, solicitacao.valorOferecido, solicitacao.mensagem, solicitacao.idStatus];
        const result = await pool.query(query, values);
        const row = result.rows[0];
        return new SolicitacaoModel(row.id, row.idevento, row.idusuario, row.valoroferecido, row.mensagem, row.idstatus);
    }

    async delete(id) {
        const query = 'DELETE FROM solicitacoes WHERE id = $1 RETURNING *';
        const result = await pool.query(query, [id]);
        const row = result.rows[0];
        return new SolicitacaoModel(row.id, row.idevento, row.idusuario, row.valoroferecido, row.mensagem, row.idstatus);
    }

    async update(id, solicitacao) {
        const query = `
            UPDATE solicitacoes
            SET valoroferecido = $1, mensagem = $2, idstatus = $3
            WHERE id = $4 RETURNING *
        `;
        const values = [solicitacao.valorOferecido, solicitacao.mensagem, solicitacao.idStatus, id];
        const result = await pool.query(query, values);
        const row = result.rows[0];
        return new SolicitacaoModel(row.id, row.idevento, row.valoroferecido, row.mensagem, row.idstatus);
    }

    async getByIdEvento(idEvento) {
        const query = 'SELECT * FROM solicitacoes WHERE idevento = $1';
        const result = await pool.query(query, [idEvento]);
        return result.rows.map(row => new SolicitacaoModel(
            row.id,
            row.idevento,
            row.idusuario,
            row.valoroferecido,
            row.mensagem,
            row.idstatus
        ));
    }
}

module.exports = new SolicitacaoRepository();