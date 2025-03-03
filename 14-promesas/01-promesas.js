let promesa = new Promise((resolve, reject)=>{
    setTimeout(() =>resolve('Hola Mundo'),10000);
});

promesa.then(
    valor =>console.log(valor),
    e => console.log('error', e)
)