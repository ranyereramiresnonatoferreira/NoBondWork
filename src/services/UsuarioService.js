const usuarioRepository = require('../repositories/UsuarioRepository');

class UsuarioService {
    async login(login, senha) {
        const usuario = await usuarioRepository.findByLogin(login, senha);
        if (usuario) {
            return usuario;
        } else {
            return null;
        }
    }
}

module.exports = new UsuarioService();