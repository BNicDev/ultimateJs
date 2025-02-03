function paraAbsoluto(arr){
    // const abs = [];
    // arr.map(n=>{
    //     if(n<0){
    //         abs.push(-n);
    //     }else{
    //         abs.push(n);
    //     }
    // })
    // return abs;
    return arr.map(n => Math.abs(n));
};

const ns = [-2, 3, 5, -15];

const absolutos = paraAbsoluto(ns);

console.log(absolutos); 