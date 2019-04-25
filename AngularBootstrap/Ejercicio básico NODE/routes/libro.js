const express = require('express');

//let Libro = require('../models/libro.js');
let router = express.Router();

const fs = require('fs');

const archivo = 'libros.json';

let cargarLibros = () => {
    return new Promise((resolve, reject) => {
        try {
            resolve(JSON.parse(fs.readFileSync(archivo, 'utf8')));
        } catch (e) {
            //console.log(e);
            reject([]);
        }
    });
}

let guardarLibros = (libros) => {
    fs.writeFileSync(archivo, JSON.stringify(libros));
};

let buscarLibroPorId = (id) => {
    return new Promise((resolve, reject) => {
        //let libros = cargarLibros();
        cargarLibros().then(libros => {
            let resultado = libros.filter((libro) => libro.id == id);
            if (resultado.length > 0)
                resolve(resultado[0]);
            else
                reject("El libro ya existe, no se puede insertar");
        });
    });
}

let nuevoLibro = (id, titulo, autor, precio) => {
	return new Promise((resolve, reject) => {
		buscarLibroPorId(id).then(libros => {
			reject("El libro a inserta ya existe");
		}).catch(error => {
			cargarLibros().then(resultado => {
				let nuevo = {
					id: id,
					titulo: titulo,
					autor: autor,
					precio: precio
				};
				resultado.push(nuevo);
                guardarLibros(resultado);
                resolve(nuevo);				
			});
        });
    });
}

/*
let borrarLibro = (id) => {
    let libros = cargarLibros();
    let librosFiltrados = libros.filter((libro) => libro.id != id);
    if (librosFiltrados.length !== libros.length)
        guardarLibros(librosFiltrados);
    return librosFiltrados.length !== libros.length;
}

let modificarLibro = (id, titulo, autor, precio) => {
    let libro = buscarLibroPorId(id);
    if (libro)
    {
        borrarLibro(id);
        nuevoLibro(id, titulo, autor, precio);
        return true;
    } else {
        return false;
    }
};
*/

router.get('/', (req, res) => {
    cargarLibros().then(resultado => {
        //console.log("ENTRA2");
        res.send(resultado);
    }).catch(error => {
        //console.log("ENTRA3");
        res.send(error);
    });
});

router.get('/:id', (req, res) => {
    buscarLibroPorId(req.params.id).then(resultado => {
        if (resultado)
            res.send({error: false, resultado: resultado});
        else
            res.send({error: true, mensajeError: "Libro no encontrado"});
    }).catch(error => {
        res.send({error: true, mensajeError:"Error buscando libro "+error});
    });
});

router.post('/', (req, res) => {
    nuevoLibro(req.body.id, req.body.titulo,req.body.autor, req.body.precio).then(resultado => {
        res.send({error: false, resultado: resultado});
    }).catch(error => {
        res.send({error: true, mensajeError:"Error añadiendo libro"});
    });
});

module.exports = router;