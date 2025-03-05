const p1 = Promise.resolve(3);
const p2 = 42;
const p3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000, 'foo');
});

// Promise.all([p1,p2,p3])
// .then(valores => console.log('all', valores))
// .catch(e => console.log('error', e)) 
// este metodo se ejecuta cuando todas las promesas se resuelven. pero si una se rechaza todasigual

Promise.race([p1,p2,p3])
.then(valor => console.log('race', valor))
.catch(e => console.log('error', e))
// este metodo se ejecuta cuando alguna de las promesas se resuelve. si una se resuelve primero, se ejecuta el then, si una se rechaza primero, se ejecuta el catch