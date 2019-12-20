const controllerCliente = require('../controllers/cliente')

module.exports = (server) => {

    server.get('/cliente/:empresaId', async (req, res, next) => {
        const result = await controllerCliente.controllers().obterPorEmpresaId(req)
        res.send(result.recordset);
        return next();
    });

}