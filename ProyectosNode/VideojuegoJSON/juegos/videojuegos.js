const fs = require('fs');

const archivo = 'videojuegos.json';

let cargarVideoJuegos = () => {
    try{
        return JSON.parse(fs.readFileSync(archivo, 'utf8'));
    } catch (e){
        return[];
    }

}

let guardarVideoJuegos = (juego) => {
    fs.writeFileSync(archivo, JSON.stringify(juego));
};

let buscarVideoJuegosPorID = (id) => {
    let = juego = cargarVideoJuegos();
    let resultado = juego.filter((juego) => juego.id == id);
    if (resultado.length > 0)
    return resultado [0];
};

let nuevoVideoJuego = (id, titulo, autor, precio) => {
    if (!buscarVideoJuegosPorID(id))
    {
        let juegos = cargarVideoJuegos();
        let nuevo = {
            
                id: id,
                titulo: titulo,
                autor: autor,
                precio: precio
            };
            juegos.push(nuevo);
            guardarVideoJuegos(juegos);
            return true;
        }
    };

    let borrarVideoJuego = (id) => {
        let juegos = cargarVideoJuegos();
        let juegosFiltrados =
        juegos.filter((juegos) => juegos.id != id);
        if(juegosFiltrados.length !== juegos.length)
                guardarVideoJuegos(juegosFiltrados);
        return juegosFiltrados.length !== juegos.length;
    }

    module.exports = {
        listarVideoJuegos : cargarVideoJuegos,
        nuevoVideoJuego: nuevoVideoJuego,
        borrarVideoJuego: borrarVideoJuego
    };