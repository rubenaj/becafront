const express = require('express');

let router = express.Router();

const fs = require('fs');

const archivo = 'libros.json';

router.get('/', (req, res) => {
    cargarLibros().then(resultado =>{
        // console.log("entra2")
        res.send(resultado);
    }).catch (error => {
        // console.log("entra3");
        res.send(error);
    });
});

router.get('/:id', (req, res) => {
    buscarLibroPorId(req.params.id).then(resultado => {
        if(resultado)
            res.send({error: false, resultado: resultado});
        else
            res.send({error: true, mensajeError: "Libro no encontrado"});
    }).catch (error => {
        res.send({error: true, mensajeError:"Error buscando libro "+error});
    });
});

router.post('/', (req, res) => {
    nuevoLibro(req.body.id, req.body.titulo, req.body.autor, req.body.precio).then(resultado =>{
        res.send({error: false, resultado: resultado});
        }).catch (error => {
            res.send({error: true, mensajeError:"Error añadiendo libro"});
        });
    });

module.exports = router;