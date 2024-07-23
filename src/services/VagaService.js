const vagaRepository = require('../repositories/VagaRepository');

class VagaService {
    async add(vaga) {
        return await vagaRepository.add(vaga);
    }

    async delete(id) {
        return await vagaRepository.delete(id);
    }

    async update(id, vaga) {
        return await vagaRepository.update(id, vaga);
    }

    async getByIdEvento(idEvento) {
        return await vagaRepository.getByIdEvento(idEvento);
    }
}

module.exports = new VagaService();