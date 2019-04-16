const http = require('http');
const fs = require('fs');
const os = require('os');
const url= require('url');
var atenderPeticion = (request, response) => {


  var navegador = request.headers['user-agent'];




  if (request.url == '/') {
    response.writeHead(200, { "Content-Type": "text/html" });
    var contenido = fs.readFileSync('./index.html', 'utf8');
    response.write(contenido);
  } else if (request.url == ('/usuario')) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Bienvenido/a" + require("os").userInfo().username);
  }
  else if (request.url.startsWith('/usuario')) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    var cadenaURL = request.url.split("/");
    
    if(cadenaURL.length == 2){
      var parametros= url.parse(request.url, true).query; 
      var nombre= parametros.nombre; //Suponiendo que el campo se llame id
      var edad = parametros.edad;
      console.log("estoy aqui");
      if(edad >= 18){
        response.write(" Hola "+nombre+" "+" eres mayor de edad");
        
      }
      else{
        response.write(" Hola "+nombre+" "+" no eres mayor de edad");
      }

    }
    else if(cadenaURL.length > 2){

      if(cadenaURL[3] >= 18){
        response.write(" Hola "+os.userInfo().username+" "+cadenaURL[2]+" eres mayor de edad");
      }
      else{
        response.write(" Hola "+os.userInfo().username+" "+cadenaURL[2]+" no eres mayor de edad");
      }
    }
    

  }

  else if (request.url == '/carpeta') {
    response.writeHead(200, { "Content-Type": "text/plain" });
    fs.readdirSync('.').forEach(fichero => {
      response.write(fichero + "\n");

    });
  }
  else if (request.url == '/error.png') {
    response.writeHead(200, { "Content-Type": "image/png" });
  }
  else {
    response.writeHead(200, { "Content-Type": "text/html" });
    var contenido = fs.readFileSync('./error.html', 'utf8');
    response.write(contenido);
  }

  response.end();

}

http.createServer(atenderPeticion).listen(8080);