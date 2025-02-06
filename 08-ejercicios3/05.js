const usuarios = [
    {edad: 17, nombre:'Nico', plan:'premium'},
    {edad: 13, nombre:'Chanchito', plan:'premium'},
    {edad: 32, nombre:'Felipe', plan:'free'},
    {edad: 25, nombre:'Fernanda', plan:'gold'},
];

function obtenerMayor(arr){
    return arr.reduce((may, usrs) => may.edad > usrs.edad? may : usrs, arr[0 ]);

    // let may = arr[0];
    // for(let usrs of arr){
    //     if(may.edad < usrs.edad){
    //         may = usrs;
    //     }
    // }
    // return may
};

const mayor = obtenerMayor(usuarios);

console.log(mayor);