const miArray = [
    "Hola",
    12,
    "Mundo",
    {},
    {id:15},
    ['lala']
];
function dividePorTipo(arr){
   return arr.reduce((acc, el) => {
        const tipo = typeof el;
        acc[tipo] = acc[tipo] || [];
        acc[tipo].push(el);
        return acc;
    }, {});
};

const nuevoArray = dividePorTipo(miArray);
console.log(nuevoArray);
