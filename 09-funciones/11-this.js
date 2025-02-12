// hace referencia a un objeto
//this hace referencia al objeto windows si se encuentra dentro de una function y no dentro de un objeto
//new hace refencia al objeo que sera creado

// const user = {
//     name: 'nicolas',
//     login(){
//         console.log(this);
//     }
// }
// user.logout = function logout (){
//     console.log(this);
// }
// user.logout()

// function log(){
//     console.log(this);
// }

// log()

function Log(mensaje){
    this.mensaje = mensaje;
    console.log(this)
}
/**
 * se cre un objeto literal
 * se vincula este objeto a this
 * se vincula con el prototipo
 * si no retorna nada retorna this
 */

const l = new Log('hola')