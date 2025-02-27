//HTMLElement
let htmlElement = document.getElementById('cuerpo');

//HTMLCollection => se parece a un array pero no lo es
let elementosred = document.getElementsByClassName('red');


//nodeList 
let elementosChanchito = document.getElementsByName('chanchito');

//HTMLCollection
let parrafos = document.getElementsByTagName('p');


//HTMLElement <= solo un elemento
let el = document.querySelector('#cuerpo');


//nodeList <= varios elementos
let els = document.querySelectorAll('p');

let plive = document.getElementsByTagName('p');
let pstatic = document.querySelectorAll('p');

let nuevop = document.createElement('p');
document.body.append(nuevop);

console.log(plive,pstatic)
