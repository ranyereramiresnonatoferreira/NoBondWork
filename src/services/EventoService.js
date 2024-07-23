const eventoRepository = require('../repositories/EventoRepository');

class EventoService {
    async add(evento) {
        return await eventoRepository.add(evento);
    }

    async update(id, evento) {
        return await eventoRepository.update(id, evento);
    }

    async getById(id) {
        return await eventoRepository.getById(id);
    }

    async delete(id) {
        return await eventoRepository.delete(id);
    }

    async getByIdResponsavel(idResponsavel) {
        return await eventoRepository.getByIdResponsavel(idResponsavel);
    }
}

module.exports = new EventoService();