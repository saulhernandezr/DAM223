        /* al conectarse el html con logica.js la pagina solicita un nombre y lo guarda en la variable nombre */
        let nombre = prompt("cual es tu nombre?:");
        /* muestra un saludo en la consola y luego en la pagina html */
        console.log("hola: " + nombre+"!!");
        document.write("<h1>hola: " + nombre+"!!</h1>");