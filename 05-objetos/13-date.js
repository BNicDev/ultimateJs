const ahora = new Date();
// console.log(ahora);
const fecha = new Date('december 11 1986 14:15 gmt-0300');
console.log(fecha)

//mes dia año

const fecha2 = new Date(1986,11,25, 14, 15);
const fecha3 = new Date(1986,11,25, 14+15, 15);
console.log(fecha2);
console.log(fecha3);


console.log('datestring', fecha3.toDateString());
console.log('ISOstring', fecha3.toISOString());
console.log('timestring', fecha3.toTimeString());

fecha3.setFullYear(1777)

console.log(fecha3.getDate());
console.log(fecha3.getDay());
console.log(fecha3.getFullYear());
console.log(fecha3.getHours());
console.log(fecha3.getMilliseconds());
console.log(fecha3.getMinutes());
console.log(fecha3.getMonth());



