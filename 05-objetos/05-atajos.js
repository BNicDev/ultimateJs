let obj = {};

let obj1 = new Object();

/**
 * new array();[]
 * new string();' ' "" ``
 * new number(); 12
 * new boolean(); true  false
 * en estas lineas de codigo se esta creando un objeto por ende type of devuelve object
 */

function Usuario(){
    this.name = 'Nombre';
}

let usuario = new Usuario();
console.log(usuario.constructor);


const s1 = '1+1';
const s2 = new String('1+1');
console.log(eval(s1),eval(s2));
console.log(s1.valueOf(),s2.valueOf()); // usando valueof devuelve el valor como string literal