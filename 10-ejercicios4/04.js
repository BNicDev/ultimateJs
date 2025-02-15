function suma(fn,...rest){
    let acumulado = rest.reduce((acc,el)=>{
        return acc + el;
    })
    fn(acumulado)
};

suma(resultado => {
    console.log(resultado)
}, 1,2,3,4)