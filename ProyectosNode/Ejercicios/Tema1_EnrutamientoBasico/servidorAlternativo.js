const url = require('url');
...
var parametros = url.parse(request.url, true).query;
var id = parametros.id; //Suponiendo que el campo se llame id.