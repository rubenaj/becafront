const fs = require('fs');
const archivo = 'libros.json';
const express = require('express');
let router = express.Router();



let cargarLibros = () => {
    try{
    return JSON.parse(fs.readFileSync(archivo, 'utf8'));
    } catch (e) {
        // console.log(e);
    return [];
    }
};

let nuevoLibro = (id, titulo, autor, precio) => {
    if (!buscarLibroPorId(id)){ //solo entra si el libro no está
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