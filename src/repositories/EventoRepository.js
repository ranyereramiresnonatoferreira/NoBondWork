const pool = require('../db');
const EventoModel = require('../models/EventoModel');

class EventoRepository 
{
    // Adiciona um novo evento
    async add(evento) {
        const query = `
            INSERT INTO eventos (DataHora, NomeEvento, DescricaoEvento, CepEvento, RuaEvento, NumeroEvento, BairroEvento, CidadeEvento, UfEvento, ComplementoEvento, IdResponsavel)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
            RETURNING *`;
        const values = [
            evento.dataHora, evento.nomeEvento, evento.descricaoEvento,
            evento.cepEvento, evento.ruaEvento, evento.numeroEvento,
            evento.bairroEvento, evento.cidadeEvento, evento.ufEvento,
            evento.complementoEvento, evento.idResponsavel
        ];
        const result = await pool.query(query, values);
        return new EventoModel(...Object.values(result.rows[0]));
    }

    // Atualiza um evento existente por ID
    async update(id, evento) {
        const query = `
            UPDATE eventos
            SET DataHora = $1, NomeEvento = $2, DescricaoEvento = $3, CepEvento = $4, RuaEvento = $5, NumeroEvento = $6, BairroEvento = $7, CidadeEvento = $8, UfEvento = $9, ComplementoEvento = $10
            WHERE Id = $11
            RETURNING *`;
        const values = [
            evento.dataHora, evento.nomeEvento, evento.descricaoEvento,
            evento.cepEvento, evento.ruaEvento, evento.numeroEvento,
            evento.bairroEvento, evento.cidadeEvento, evento.ufEvento,
            evento.complementoEvento, id
        ];
        const result = await pool.query(query, values);
        return new EventoModel(...Object.values(result.rows[0]));
    }

    // Obtém um evento por ID
    async getById(id) {
        const query = 'SELECT * FROM eventos WHERE Id = $1';
        const result = await pool.query(query, [id]);
        const row = result.rows[0];
        return row ? new EventoModel(...Object.values(row)) : null;
    }

    // Deleta um evento por ID
    async delete(id) {
        const query = 'DELETE FROM eventos WHERE Id = $1 RETURNING *';
        const result = await pool.query(query, [id]);
        const row = result.rows[0];
        return row ? new EventoModel(...Object.values(row)) : null;
    }

    async getByIdResponsavel(idResponsavel) {
        const query = 'SELECT * FROM eventos';
        const result = await pool.query(query);
        return result.rows.map(row => new EventoModel(
            row.id,
            row.datahora,
            row.nomeevento,
            row.descricaoevento,
            row.cepevento,
            row.ruaevento,
            row.numeroevento,
            row.bairroevento,
            row.cidadeevento,
            row.ufevento,
            row.complementoevento,
            row.idresponsavel
        ));
    }

    async getAll() {
        const query = 'SELECT * FROM eventos';
        const result = await pool.query(query);
        return result.rows.map(row => new EventoModel(
            row.id,
            row.datahora,
            row.nomeevento,
            row.descricaoevento,
            row.cepevento,
            row.ruaevento,
            row.numeroevento,
            row.bairroevento,
            row.cidadeevento,
            row.ufevento,
            row.complementoevento,
            row.idresponsavel
        ));
    }
}

module.exports = new EventoRepository();