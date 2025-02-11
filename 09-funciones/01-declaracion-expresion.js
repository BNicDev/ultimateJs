console.log(resta)//hoisting
// declaracion de funciones : function declaration

//funcion nombrada
function suma (){
    console.log('sumando...');
}

//funcion anonima 
// function(){
//     console.log('funcion anonima')
// }

//expresion de funciones 
//expresion de funcion anonima 
let resta = function(){ 
    console.log('restando...');
}

//named function expression
const multiplica = function multi(){
    console.log('multiplicando...');
}

//fat arrow function siempre va a ser anonima
const divide = () => {
    console.log('dividiendo...');
}