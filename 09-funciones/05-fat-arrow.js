// function suma (a,b){
//     //     let total = 0;
//     //     for (let valor of arguments){
//     //         total += valor;
//     //     }
//     //     return total;
//     return Array.from(arguments).reduce((acc,el)=>acc+el);
//     }
    
// en las fat arrow function no existe arguments
// no cuentan con super ni tampoco con this
// las fats arrow se usan unicamente para realizar calculos
const suma = (a,b) => {
    return Array.from(arguments).reduce((acc,el)=>acc+el);
}
    console.log(suma(1,2,3,4))