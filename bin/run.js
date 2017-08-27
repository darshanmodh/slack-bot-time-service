'use strict';

const service = require('../server/service');
const http = require('http');

const server = http.createServer(service);
server.listen(3001);

server.on('listening', function() {
    console.log(`Iris time service is listening on ${server.address().port} in ${service.get('env')} mode.`);
});