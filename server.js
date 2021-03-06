const restify = require('restify');
const recursiveReaddir = require('recursive-readdir');
const path = require('path');
const mongoose = require('mongoose');

const server = restify.createServer({
    name: 'APPAGENDEAGORA',
    version: '1.0.0'
});

mongoose.connect('mongodb+srv://rootagende:wbp8DEk3xQ8GisZq@agende-agora-1wv29.gcp.mongodb.net/agende-agora?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.urlEncodedBodyParser())

const pathFiles = path.resolve(path.resolve('./').concat('/routes'));

recursiveReaddir(pathFiles, ['!*.js'], (err, files) => {
    if (err) {
        console.log(err)
        process.exit(1)
    }
    files.forEach(element => { require(element)(server) })
});

server.use(
    function nocache(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Pragma', 'no-cache');
        next();
    }
);

module.exports = Object.assign({ server, restify });
