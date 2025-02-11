let afuera = 'estoy afuera'

function alcance(){
    afuera = 'estoy dentro'
    function saludo(){}
    var vieja = 'ya no usar';
    let variable = 'hola mundo';
    const constante = 'hola mundo!';
}
console.log(afuera);

alcance()

console.log(afuera);