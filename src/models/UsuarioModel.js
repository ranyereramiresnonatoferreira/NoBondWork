class UsuarioModel {
    constructor(id, login, senha, nome, cpf, email, tipousuario) {
        this.id = id;
        this.login = login;
        this.senha = senha;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.tipousuario = tipousuario;
    }
}

module.exports = UsuarioModel;