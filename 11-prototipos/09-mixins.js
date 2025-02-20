function mixin(Ctr,...args){
    Object.assign(Ctr.prototype, ...args);
}

let vuela = {
    vuela(){
        console.log("Volando");
    }
}

let nada ={
    nada(){
        console.log("Nadando");
    }
}

let bano ={
    bano(){
        console.log("pop");
    }
}

let camina ={
    camina(){
        console.log("caminando");
    }
}


//vuela, nada, camina, va al banio
function Pato(){
    this.name = "Patito";
    mixin(Pato, nada, bano, camina, vuela);
}

//nada, camina, va al banio
function Perro(){}
Object.assign(Perro.prototype,nada,bano,camina)
let perro = new Perro();

//nada, va al banio
function Pez(){}
Object.assign(Pez.prototype,nada,bano);
let p = new Pez();

//vuela pero no nada, camina ni va al banio
function Avion(){}


// avion
Object.assign(Avion.prototype, vuela);
console.log(Avion.prototype, new Avion()); // { vuela: [Function: vuela] } Pato {}