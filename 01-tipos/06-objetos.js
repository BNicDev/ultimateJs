//personaje de tv

let nombre = 'tanjiro';
let anime = 'demon slayer';
let edad = 16;

//objeto de personaje

let personaje = {
    nombre: 'tanjiro',
    anime: 'demon slayer',
    edad: 16,
};

console.log(personaje);
console.log(personaje['anime']);
console.log(personaje.edad);


personaje.edad = 13;

let llave = 'edad'
personaje[llave] = 14;


console.log(personaje.edad)

delete personaje.anime;

console.log(personaje)