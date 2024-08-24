const solicitacaoRepository = require('../repositories/SolicitacaoRepository');

class SolicitacaoService {
    async add(solicitacao) {
        return await solicitacaoRepository.add(solicitacao);
    }

    async delete(id) {
        return await solicitacaoRepository.delete(id);
    }

    async update(id, solicitacao) {
        return await solicitacaoRepository.update(id, solicitacao);
    }

    async getByIdEvento(idEvento) {
        return await solicitacaoRepository.getByIdEvento(idEvento);
    }

    async getByIdUsuario(idUsuario) {
        return await solicitacaoRepository.getByIdUsuario(idUsuario);
    }
}

module.exports = new SolicitacaoService();