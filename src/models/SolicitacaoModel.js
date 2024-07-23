class SolicitacaoModel {
    constructor(id, idEvento, idUsuario, valorOferecido, mensagem, idStatus) {
        this.id = id;
        this.idEvento = idEvento;
        this.idUsuario = idUsuario;
        this.valorOferecido = valorOferecido;
        this.mensagem = mensagem;
        this.idStatus = idStatus;
    }
}

module.exports = SolicitacaoModel;