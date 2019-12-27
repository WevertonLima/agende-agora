const ModelUsuarios = require('../models/usuarios');

class UsuariosController {

    async criarUsuario(req, res) {

        console.log('controller');
        
        const user = {
            Nome: 'Weverton'
            , Sobrenome: 'Lima'
            , CpfCnpj: '11122233344'
            , Apagado: false
        }

        const usuario = await ModelUsuarios.create({ user });

        return res.json(usuario);
    }
}

module.exports = new UsuariosController();