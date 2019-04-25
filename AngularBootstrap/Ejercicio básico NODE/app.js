const express = require('express');
//const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//const autores = require('./routes/autor');
const libros = require('./routes/libro');

//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/libros', {useMongoClient: true});

let app = express();
var cors = require('cors');
app.use(cors());

/*app.use((req, res, next) => {
    res.send({error: "Web cerrada por mantenimiento"});
});*/
app.use((req, res, next) => {
    console.log(new Date().toString(), ":", req.method, req.url);
    next();
});
app.use(bodyParser.json());
//app.use('/autores', autores);
app.use('/libros', libros);

app.listen(8080);