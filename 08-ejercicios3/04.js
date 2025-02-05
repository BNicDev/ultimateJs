const usuarios = [
    {edad: 17, nombre:'Nico', plan:'premium'},
    {edad: 13, nombre:'Chanchito', plan:'premium'},
    {edad: 32, nombre:'Felipe', plan:'free'},
    {edad: 25, nombre:'Fernanda', plan:'gold'},
];

function cuantosPremium(usrs){
    // let premium = usrs.filter(usrs=> usrs.plan !== 'free');
    // return premium.length;
    return usrs.reduce((acc, el) => {
        if(el.plan !== 'free'){
           return acc + 1; 
        }
        return acc;
    
    },0)
};

function cuantosMayores(usrs){
    // let mayores = usrs.filter(usrs=> usrs.edad > 18);
    // return mayores.length;

    return usrs.reduce((acc, el) =>{
        if(el.edad >18){
            return acc + 1;
        }
        return acc
    }, 0)
};

console.log(cuantosPremium(usuarios));
console.log(cuantosMayores(usuarios))