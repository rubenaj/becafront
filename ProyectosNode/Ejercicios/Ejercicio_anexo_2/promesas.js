let datos = [
    {nombre: "Diego", telefono: "966112233", edad: 40},
    {nombre: "Carmen", telefono: "911223344", edad: 35},
    {nombre: "Victor", telefono: "611998877", edad: 15},
    {nombre: "Carolina", telefono: "633663366", edad: 17}
   ];
let promesaMayoresDeEdad = listado => {
    return new Promise((resolve, reject) => {
    let resultado = listado.filter(persona => persona.edad >= 18);
    if (resultado.length > 0)
    resolve(resultado);
    else
    reject("No hay resultados");
    
    });
   }
let nuevaPersona = persona => {
       return new Promise ((resolve,reject) => {
        let existe = datos.filter(pers => pers.telefono === persona.telefono );
        if (existe.length == 0){
            datos.push(personvfga);
            resolve(persona);
        } else
            reject("Error: el telefono ya existe");
        
    
       });
    }

    let per = ({nombre: "pilar",telefono:"369258147", edad:52}).then(resultado => {
        console.log("Añadida persona: ", resultado);
    }).catch(error => {

        console.log("Error:", error);
    });