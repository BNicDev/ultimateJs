//tienes que usar reduce

function dividePorTipo(arr){
    return arr.reduce((acc,el) => {
        const tipo = typeof el;
        acc[tipo] = acc[tipo] ? acc[tipo] : [];
        acc[tipo].push(el);
        return acc
    },{})
};

const miArray = [
    "Hola",
    12,
    true,
    "Mundo",
    {},
    {id: 15},
    ['lala']
];

let arr = dividePorTipo(miArray);
console.log(arr)