let collection = document.getElementsByTagName('p');
let list = document.querySelectorAll('p');
console.log(collection,list);


// let item1 = collection.namedItem('chanchito');
// let item2 = collection.item(3);
// let item3 = collection[3];


// collection.array.forEach(el => console.log(el));

//iterando elementos

// for(let el of collection){
//     console.log(el);
// }

// Array.from(collection).forEach(x => console.log(x)); muestra el objeto

// [...collection].forEach(x => console.log(x)); muestra el elemento mismo

let item = list.item(3);
let item2 = list[3];

list.forEach(x => console.log(x)); //muestra el objeto

//entries keys y values.

let entries = list.entries();
let keys = list.keys();
let values = list.values();


[...list].forEach(x => console.log(x)); //muestra el elemento mismo