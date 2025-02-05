const usuarios = [
    {edad: 17, nombre:'Nico', plan:'premium'},
    {edad: 13, nombre:'Chanchito', plan:'free'},
    {edad: 32, nombre:'Felipe', plan:'free'},
    {edad: 25, nombre:'Fernanda', plan:'gold'},
];

function getPaiduser(usrs){
    return usrs.filter(user => user.plan !== 'free');
};

function getFreeUser(usrs){
    return usrs.filter(user=>user.plan === 'free')
};

console.log(getPaiduser(usuarios), getFreeUser(usuarios));