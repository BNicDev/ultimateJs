let a = {prop:1};

function suma(n){
    n.prop++;
}

suma(a);
console.log(a)

//los tipos de datos primitivos de copian cuando se agregan a otra var
// los tipos de datos de referencia se crea una referencia /obj/arr/func