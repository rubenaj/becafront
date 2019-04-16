const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const libros = require('./routes/libro');



let app = express();

/*
app.use((req, res, next) => {
    res.send({error:"Web cerrada por mantenimiento"};)
})
*/



app.use((req, res, next) => {
console.log(new Date().toString(), ";", req.method, req.url);
next();

});

app.use(bodyParser.json());

app.use('/libros', libros);

app.listen(8080);