let guardarLibros = (libros) => {
    fs.writeFileSync(archivo, JSON.stringify(libros));
    };

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

let buscarLibroPorId = (id) => {
    return new Promise((resolve , reject) => {
    // let libros = cargarLibros();
    cargarLibros().then (libros => {
    let resultado = libros.filter((libro) => libro.id == id);
    if (resultado.length > 0)
    // return resultado[0];
        resolve(resultado [0]);
    else
        reject ("Libro no encontrado");
});
});
}

 buscarLibroPorId("id").then(resultado => {
     console.log("libro por id : ", resultado);
 }).catch (error =>  {
     console.log("error: ", error);
 });