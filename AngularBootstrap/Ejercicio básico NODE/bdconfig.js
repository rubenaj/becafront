const mysql = require("mysql");
let conexion = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database: "biblioteca"
});

conexion.connect((error) =>{
    if (error)
    console.log ("error al conectar con la bd: " ,error);
    else
    console.log("conexion satisfactoria");
});

conexion.query("SELECT titulo,precio FROM libros", (error, resultado,
    campos) => {
    if (error)
    console.log("Error al procesar la consulta");
    else {
    resultado.forEach((libros) => console.log( libros.titulo,  ":", libros.precio,));
    }
    });