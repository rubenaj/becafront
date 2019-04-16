const fs = require('fs');
const archivo = 'libros.json';
// let cargarLibros = () => {
// try {
// return JSON.parse(fs.readFileSync(archivo, 'utf8'));
// } catch (e) {
// return [];
// }
// };
let cargarLibros = () => {
    return new Promise((resolve , reject) => {
    try{
    resolve JSON.parse(fs.readFileSync(archivo, 'utf8'));
    } catch (e) {
        // console.log(e);
    reject ([]);
    }
    });
}
let guardarLibros = (libros) => {
fs.writeFileSync(archivo, JSON.stringify(libros));
};


//libros 2
// let buscarLibroPorId = (id) => {
//     let libros = cargarLibros();
//     let resultado = libros.filter((libro) => libro.id == id);
//     if (resultado.length > 0)
//         return resultado[0];
// };

let buscarLibroPorId = (id) => {
    return new Promise((resolve, reject) => {
        cargarLibros().then(resultado => {
            let resultado = libros.filter((libro) => libro.id == id);
            if (resultado.lenght > 0)
                resolve(resultado[0]);
            else
                reject("libro no encontrado");

        });
    });

}


//libros 3
let nuevoLibro = (id, titulo, autor, precio) => {
    if (!buscarLibroPorId(id))
    {
    let libros = cargarLibros();
    let nuevo = {
    id: id,
    titulo: titulo,
    autor: autor,
    precio: precio
    };
    libros.push(nuevo);
    guardarLibros(libros);
    return true;
    }
    };
//borrarlibro
let borrarLibro = (id) => {
    let libros = cargarLibros();
    let librosFiltrados =
    libros.filter((libro) => libro.id != id);
    if (librosFiltrados.length !== libros.length)
    guardarLibros(librosFiltrados);
    return librosFiltrados.length !== libros.length;
    }
//libro 4
module.exports = {
    listarLibros: cargarLibros,
    nuevoLibro: nuevoLibro,
    borrarLibro: borrarLibro
    };
    