const pool = require('../db'); // Certifique-se de que o caminho está correto
const VagaModel = require('../models/VagaModel');

class VagaRepository {
    async add(vaga) {
        const query = `
            INSERT INTO vagas (IdEvento, NomeVaga, DescricaoVaga, DataHora, HorasDeTrabalho)
            VALUES ($1, $2, $3, $4, $5) RETURNING *
        `;
        const values = [vaga.idEvento, vaga.nomeVaga, vaga.descricaoVaga, vaga.dataHora, vaga.horasDeTrabalho];
        const result = await pool.query(query, values);
        const row = result.rows[0];
        return new VagaModel(row.id, row.idevento, row.nomevaga, row.descricaovaga, row.datahora, row.horasdetrabalho);
    }

    async delete(id) {
        const query = 'DELETE FROM vagas WHERE id = $1 RETURNING *';
        const result = await pool.query(query, [id]);
        const row = result.rows[0];
        return new VagaModel(row.id, row.idevento, row.nomevaga, row.descricaovaga, row.datahora, row.horasdetrabalho);
    }

    async update(id, vaga) {
        const query = `
            UPDATE vagas
            SET idevento = $1, nomevaga = $2, descricaovaga = $3, datahora = $4, horasdetrabalho = $5
            WHERE id = $6 RETURNING *
        `;
        const values = [vaga.idEvento, vaga.nomeVaga, vaga.descricaoVaga, vaga.dataHora, vaga.horasDeTrabalho, id];
        const result = await pool.query(query, values);
        const row = result.rows[0];
        return new VagaModel(row.id, row.idevento, row.nomevaga, row.descricaovaga, row.datahora, row.horasdetrabalho);
    }

    async getByIdEvento(idEvento) {
        const query = 'SELECT * FROM vagas WHERE idevento = $1';
        const result = await pool.query(query, [idEvento]);
        return result.rows.map(row => new VagaModel(
            row.id,
            row.idevento,
            row.nomevaga,
            row.descricaovaga,
            row.datahora,
            row.horasdetrabalho
        ));
    }
}

module.exports = new VagaRepository();