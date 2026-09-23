const readline = require('readline');
const cocina = require('./cocina.js');

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const orden = [];

function preguntar(texto) {
    return new Promise(resolve => {
        entrada.question(texto, resolve);
    });
}

function mostrarLista(lista) {
    lista.forEach((platillo, posicion) => {
        console.log(`${posicion + 1}. ${platillo.nombre}`);
    });

    return lista;
}

async function iniciar() {
    let opcion;

    do {
        console.log('\n=== COCINA ===');
        console.log('1. Ver menú');
        console.log('2. Agregar platillo a la orden');
        console.log('3. Editar platillo de la orden');
        console.log('4. Eliminar platillo de la orden');
        console.log('5. Mostrar orden final y salir');

        opcion = await preguntar('Selecciona una opción: ');

        if (opcion === '1') {
            console.log('\n=== MENÚ ===');
            mostrarLista(cocina.listarMenu());
        } else if (opcion === '2') {
            const nombre = await preguntar('¿Qué platillo deseas pedir?: ');
            const platillo = cocina.agregarPlatillo(orden, nombre);

            if (platillo) {
                console.log('Platillo agregado a la orden.');
            } else {
                console.log('Ese platillo no existe en el menú.');
            }
        } else if (opcion === '3') {
            console.log('\n=== ORDEN ACTUAL ===');
            mostrarLista(cocina.listarOrden(orden));

            const anterior = await preguntar('Platillo que deseas editar: ');
            const nuevo = await preguntar('Nuevo nombre: ');
            const platillo = cocina.editarPlatillo(
                orden,
                anterior,
                nuevo
            );

            console.log(
                platillo
                    ? 'Platillo editado correctamente.'
                    : 'Platillo no encontrado.'
            );
        } else if (opcion === '4') {
            console.log('\n=== ORDEN ACTUAL ===');
            mostrarLista(cocina.listarOrden(orden));

            const nombre = await preguntar(
                'Platillo que deseas eliminar: '
            );

            const platillo = cocina.eliminarPlatillo(orden, nombre);

            console.log(
                platillo
                    ? 'Platillo eliminado correctamente.'
                    : 'Platillo no encontrado.'
            );
        } else if (opcion === '5') {
            console.log('\n=== ORDEN FINAL ===');

            if (orden.length === 0) {
                console.log('La orden está vacía.');
            } else {
                mostrarLista(cocina.listarOrden(orden));
            }
        } else {
            console.log('Opción no válida.');
        }
    } while (opcion !== '5');

    return entrada.close();
}

iniciar();