const express = require ('express');

const bodyParser = required("body-parser");
const libros = require ('./node_modules');

let app = express();
app.use((req, res, next)=> {
    console.log(new Date().toString(), ":", req.method, req.url);
    next();
});
app.use(bodyParser.json());
// app.use('/autores',autores);
app.use('/libros', libros);

app.listen(8080);