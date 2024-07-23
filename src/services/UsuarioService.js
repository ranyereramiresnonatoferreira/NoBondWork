const usuarioRepository = require('../repositories/UsuarioRepository');

class UsuarioService {
    async findByLogin(login, senha) {
        const usuario = await usuarioRepository.findByLogin(login, senha);
        if (usuario) {
            return usuario;
        } else {
            return null;
        }
    }
}

module.exports = new UsuarioService();