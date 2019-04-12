/*var nombre;
nombre = "Miguelo";
var edad;
edad = 30;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
var spiderman = {
    nombre: "Peter parket",
    poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]
};*/
let nombre:string;
nombre = "Miguelo" ;
let edad:number;
edad = 30 ;
 
const PERSONAJE = {
    nombre:nombre ,
    edad:edad
}

/*Ahora en TypeScript vamos a crear la clase Rombo, la cual debe tener dos propiedades:
DiagonalVertical y DiagonalHorizontal.
Le añadiremos un constructor al que le pasaremos los valores anteriores cuando instanciemos el objeto.
Y también debe de tener un método que calcule el area, que será la multiplicación de DiagonalVertical * DiagonalHorizontal.
Este método devolverá un número. */

class Rombo {
    diagonalVertical:number;
    diagonalHorizontal:number;
    calcularArea():number{
      return this.diagonalHorizontal*this.diagonalVertical;
  
    };
    constructor (diagonalVertical:number, diagonalHorizontal:number){
      this.diagonalVertical=diagonalVertical;
      this.diagonalHorizontal=diagonalHorizontal;
  
    }
  
 }

 /*En este ejercicio vamos a cambiar una función normal de javascript a una función de tipo flecha.
Cómo ya sabrás las funciones de flecha no alteran el “this” cuando se corren, por lo que son interesantes para cubrir algunos problemas de JavaScript.

La función en Js sería esta:

 
function suma( a, b ){
  return (a + b) 
} */

let suma= (a:number, b:number) => (a+b);
