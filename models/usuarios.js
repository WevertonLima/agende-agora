const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    Nome: {
        type: String,
        trim: true,
    },
    Sobrenome: {
        type: String,
        trim: true,
    },
    CpfCnpj: {
        type: String,
        trim: true,
        require: true,
        unique: true,
    },
    Apagado: {
        type: Boolean,
        default: false,
    }
},
)

module.exports = mongoose.model('Usuarios', UsuarioSchema);