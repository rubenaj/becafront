const fs = require('fs');
const archivo = "datos.txt";
const textoPredefinido = "En un lugar de la mancha\n"+
"de cuyo nombre no quiero acordarme";
let guardarDatos = () => {
fs.writeFileSync(archivo, textoPredefinido);
};
let leerDatos = () => {
return fs.readFileSync(archivo, 'utf-8');
};
guardarDatos();
console.log("Texto del fichero:");
console.log(leerDatos());

let guardarDatos2 = () => {
    fs.writeFileSync(archivo, JSON.stringify(textoPredefinido));
    };