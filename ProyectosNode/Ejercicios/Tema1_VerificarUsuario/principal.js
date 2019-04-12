const utilidadesOs = require('./utilidades_os.js');

if(utilidadesOs.esUsuario("pepe")){
   console.log("hola admin")
}np
else{
   console.log("no eres el usuario principal");
   console.log("el usuario principal es " +utilidadesOs.loginPrueba);
}