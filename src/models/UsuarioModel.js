class UsuarioModel {
    constructor(id, login, senha, nome, cpf, email, tipoUsuario) {
        this.id = id;
        this.login = login;
        this.senha = senha;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.tipoUsuario = tipoUsuario;
    }
}

module.exports = UsuarioModel;