class VagaModel {
    constructor(id, idEvento, nomeVaga, descricaoVaga, dataHora, horasDeTrabalho) {
        this.id = id;
        this.idEvento = idEvento;
        this.nomeVaga = nomeVaga;
        this.descricaoVaga = descricaoVaga;
        this.dataHora = dataHora;
        this.horasDeTrabalho = horasDeTrabalho;
    }
}

module.exports = VagaModel;