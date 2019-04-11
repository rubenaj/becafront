const os = require('os');
const loginPrueba = os.userInfo().username;
function esUsuario(cadenaUsuario){
    if(cadenaUsuario == loginPrueba){
        return true;
    }
    else{
        return false;
    }
}
module.exports= { esUsuario: esUsuario , loginPrueba: loginPrueba};
