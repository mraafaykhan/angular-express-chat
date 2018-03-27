let io = require("socket.io-client");

let socketClient = io.connect('http://localhost:3000')

socketClient.on('connect', () => {
    console.log('connected to server')

    setInterval(() => {
        socketClient.emit('testevent', foo = 'message from socketClient')
        console.log('sending testevent to server');

    }, 1000)
});

