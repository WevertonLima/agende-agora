
const controllerUsuarios = require('../controllers/usuarios')

module.exports = (server) => {

    server.post('/usuarios/criarUsuario', async (req, res, next) => {
        const result = await controllerUsuarios.criarUsuario(req);
        res.send(result.recordset);
        return next();
    });

}
