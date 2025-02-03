const numeros = [1,2,3,4];

// const suma = numeros.reduce((acc,el)=>{
//     return acc + el;
// },0)

// console.log(suma); // 10

// const anidado = [[1,2],3,[4,5]];

// const plano = anidado.reduce((acc,el)=>acc.concat(el),[]);
// console.log(plano); // [1,2,3,4,5]


const usuarios = [
        {edad: 17, nombre:'nico'},
        {edad: 13, nombre:'chanchito'},
        {edad: 25, nombre:'felipe'},
        {edad: 32, nombre:'fernanda'},
    ];

    const indexado = usuarios.reduce((acc,el)=>({...acc, [el.nombre]:el}),{})

    console.log(indexado); // {nico: {edad: 17, nombre: "nico"}, chanchito: {edad: 13, nombre: "chanchito"}, felipe: {edad: 25, nombre: "felipe"}, fernanda: {edad: 32, nombre: "fernanda"}}