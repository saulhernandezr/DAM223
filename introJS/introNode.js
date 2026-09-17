
console.log("hola mundo NODE");
let edad1=20;
let edad2=30;
console.log("edad promedio: ");
console.log((edad1+edad2)/2);

console.log(("medidor de procesos"));
console.time('miProceso');
for(let i=0; i<100000000;i++);
console.timeEnd('miProceso');