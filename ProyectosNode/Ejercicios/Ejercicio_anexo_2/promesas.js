let datos = [
    { nombre: "Diego", telefono: "966112233", edad: 40 },
    { nombre: "Carmen", telefono: "911223344", edad: 35 },
    { nombre: "Victor", telefono: "611998877", edad: 15 },
    { nombre: "Carolina", telefono: "633663366", edad: 17 }
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
    return new Promise((resolve, reject) => {
 
        let resultado = datos.filter(personita => personita.telefono === persona.telefono);
        if (resultado.length == 0){
            datos.push(persona);
            resolve(persona);
        }
        else
            reject("Error: el teléfono ya existe");
 
    });
 
 }


 let borrarPersona = telefono => {
    return new Promise((resolve, reject) => {
 
        let existePersona = datos.filter(persona => persona.telefono === persona.telefono);
        if (existePersona.length > 0){
            datos = datos.filter(persona => persona.telefono != telefono);
            resolve(existePersona[0]);
        }
        else
            reject("Error: no se han encontrado coincidencias");
    });
 }

 nuevaPersona({ nombre: "Diegos", telefono: "969636369", edad: 40 }).then(resultado => {
    // cumplimiento
    console.log(datos);
 }).catch(error => {
    // rechazo
    console.log("Error:", error);
 });

borrarPersona("966112233").then(resultado => {
    console.log("borrada persona: ", resultado);
}).catch (error  => {
    console.log("Error:", error);
});

 