const http = require('http');

var atenderPeticion = (request, response) => {
     response.writeHead(200, {"Content-Type": "text/plain"});
     response.write("Bienvenido/a");
     
     let navegador = request.headers['user-agent'];

     if(navegador.indexOf("Chrome") >=0)
                 response.write("El navegador que se está utilizando es Chrome");
     else
     response.write("El navegador que se está utilizando es otro" +navegador);

     
     response.end();
    }
http.createServer(atenderPeticion).listen(8080);