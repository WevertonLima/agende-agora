const ModelUsuarios = require('../models/usuarios');

class UsuariosController {

    async criarUsuario(req, res) {

        const {user} = req.body;
        const usuario = await ModelUsuarios.create({ user });

        return res.json(usuario);
    }
}

module.exports = new UsuariosController();