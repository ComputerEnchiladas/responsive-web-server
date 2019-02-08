let mahrio = require('mahrio');

mahrio.runServer( {}, __dirname)
    .then( server => {
        server.route({
            method: 'GET',
            path: '/',
            handler: (request, reply) => {
                reply('HELLO');
            }
        })
    })