const fs = require('fs');
const archivo = 'libros.json';
const express = require('express');
let router = express.Router();

let buscarLibroPorId =(id) => {
    return new Promise((resolve, reject) =>
    // let libros = cargar libros();
    cargarLibros().then(libros =>{
        let resultado = libros.filter((libro) => libro.lenght);
        if (resultado.lenght >0 )
        resolve (resultado[0])
        else 
    }))
}

let cargarLibros = () => {
    try{
    return JSON.parse(fs.readFileSync(archivo, 'utf8'));
    } catch (e) {
        // console.log(e);
    return [];
    }
};

let nuevoLibro = (id, titulo, autor, precio) => {
    return new Promise ((resolve, reject) => {
        // let libros  = cargar
        buscarLibroPorId(id).then(libros => {
            reject("el libro a insertar ya existe");
        }).catch{
            cargarLibros().then(resultado => {
                
        let nuevo = {
            id: id,
            titulo: titulo,
            autor: autor,
            precio: precio
        };
        resultado.push(nuevo);
        guardarLibros(resultado);
        return true;
        });
    });
    });
}