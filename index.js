const { server } = require('./server');
const mongoose = require('mongoose');

server.listen(process.env.PORT || 1919, () => {
    console.log('\x1b[33m%s\x1b[0m', `AMBIENTE RODANDO!`);
});

