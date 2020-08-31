//Requires
const http = require('http');


http.createServer((req, res) => {

    res.writeHead((200), { 'Content-Type': 'aplication/json' });

    let salida = {
        nombre: 'Adan',
        edad: '50',
        url: req.url
    }
    res.write(JSON.stringify(salida))
        //res.write('Hola Adan')
    res.end();
})

.listen(3000);

console.log('Servidor on port 3000');