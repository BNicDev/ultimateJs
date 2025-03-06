let promesa1 = param1 => new Promise ((res,rej)=>{
    //calcular algo...
    const b = 'Hola Mundo';
    res(b);
});

let promesa2 = param2 => new Promise((res, rej)=>{
    //calculamos algo...
    res(param2 + ', hola mundo');
});

let promesa3 = (param1, param2) => new Promise((res,rej)=>{
    res('chanchito feliz');
})

async function main(){
   try{
    const a = await Promise.resolve('primer valor');
    const b = await promesa1(a);
    const _ = await promesa2(b);
    promesa3(a,b);
   }catch(error){
    console.error({error});
   }
}

main()
