const utilidadesOs = require('./utilidades_os.js'); 

if(utilidadesOs.esUsuario("pepes")){
    console.log("hola "+utilidadesOs.loginPrueba)
}
else{
    console.log("no eres tu mi usuario principal");
    console.log("el usuario principal es " +utilidadesOs.loginPrueba);
}