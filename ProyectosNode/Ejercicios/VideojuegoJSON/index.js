const juego = require('./juegos');
let juego1 = juego.juego.listarVideoJuegos();
console.log(juego1);
juego.juego.nuevoVideoJuego(1, "El Señor de los Anillos",
"J.R.R. Tolkien", 19.95);
juego.juego.nuevoVideoJuego(2, "WoW",
"J.R.R. Tolkien", 19.95);
let juegos2 = juego.juego.listarVideoJuegos();
console.log(juegos2);   
juego.juego.borrarVideoJuego(1);
let juegos3 = juego.juego.listarVideoJuegos();
console.log(juegos3);