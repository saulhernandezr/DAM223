
/* muestra un mensaje, se establecen variables con edades y se calcula el promedio, 
muestra el resultado en la consola */
console.log("hola mundo NODE");
let edad1=20;
let edad2=30;
console.log("edad promedio: ");
console.log((edad1+edad2)/2);

/* muestra un mensaje e inicia un cronómetro llamado 'miProceso', 
repite el proceso 100000000 veces con for para que consuma tiempo y
luego termina el cronómetro */
console.log(("medidor de procesos"));
console.time('miProceso');
for(let i=0; i<100000000;i++);
console.timeEnd('miProceso');