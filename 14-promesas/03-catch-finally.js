let promesa1 = new Promise((res, rej) =>{
    rej(12);
})

let promesa2 = new Promise((res,rej)=>{
    res(15);
})

promesa1.then(valor => {
    if(valor > 10){
        return promesa2;
    }
}).then(valor2=>{
    console.log('segunda promesa')
    return(valor2)
}).catch(e => console.log('error', e))
.finally(()=>console.log('finalizado')) //este metodo se ejecuta este o no rechazando la promesa
