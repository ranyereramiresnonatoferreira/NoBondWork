class EventoModel {
    constructor(id, dataHora, nomeEvento, descricaoEvento, cepEvento, ruaEvento, numeroEvento, bairroEvento, cidadeEvento, ufEvento, complementoEvento, idResponsavel) {
        this.id = id;
        this.dataHora = dataHora;
        this.nomeEvento = nomeEvento;
        this.descricaoEvento = descricaoEvento;
        this.cepEvento = cepEvento;
        this.ruaEvento = ruaEvento;
        this.numeroEvento = numeroEvento;
        this.bairroEvento = bairroEvento;
        this.cidadeEvento = cidadeEvento;
        this.ufEvento = ufEvento;
        this.complementoEvento = complementoEvento;
        this.idResponsavel = idResponsavel;
    }
}

module.exports = EventoModel;