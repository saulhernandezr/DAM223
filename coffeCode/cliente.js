import { menuCocina } from "./cocina.js";
import {
    pedidos,
    agregarPedido,
    modificarPedido,
    eliminarPedido,
    listarPedidos,
} from "./caja.js";
import readline from "readline";
const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
import{
    productos 
} from "./cocina.js";


const diasSemana = [
  'Domingo', 
  'Lunes', 
  'Martes', 
  'Miércoles', 
  'Jueves', 
  'Viernes', 
  'Sábado'
];
const fecha = new Date();

function pedirOpcion() {
    return new Promise((resolve) => {
        entrada.question("Elige una opcion? ", (opcion) => {
            resolve(opcion.trim());
        });
    });
}

function mostrarPromociones(dia) {

    console.log(`\n===== PROMOCIONES DEL ${dia.toUpperCase()} =====`);

    switch (dia) {

        case "Lunes":
            console.log("🍲 10% de descuento en Sopa");
            break;

        case "Martes":
            console.log("🍗 Pollo + bebida por $120");
            break;

        case "Miércoles":
            console.log("🥘 Chilaquiles al 20% de descuento");
            break;

        case "Jueves":
            console.log("🍗 2x1 en Pollo");
            break;

        case "Viernes":
            console.log("🍔 Hamburguesa + papas por $130");
            break;

        case "Sábado":
            console.log("🥞 Hot cakes al 15% de descuento");
            break;

        case "Domingo":
            console.log("🍔 Hamburguesa familiar por $200");
            break;

        default:
            console.log("No hay promociones disponibles.");
    }
}

function mostrarMenu(titulo, opciones) {
    console.log(`\n${titulo}`);
    opciones.forEach((opcion) => {
        console.log(`${opcion.id}. ${opcion.label}`);
    });
}

function mostrarDisponibilidad(dia) {

    console.log(`\n===== DISPONIBILIDAD DEL ${dia.toUpperCase()} =====`);

    let disponibles = [];
    let noDisponibles = [];

    switch (dia) {

        case "Lunes":
            disponibles = ["Sopa", "Pollo", "Chilaquiles", "Pure de papa"];
            noDisponibles = ["Hot cakes", "Hamburguesa"];
            break;

        case "Martes":
            disponibles = ["Sopa", "Pollo", "Chilaquiles"];
            noDisponibles = ["Hot cakes", "Hamburguesa", "Pure de papa"];
            break;

        case "Miércoles":
            disponibles = ["Sopa", "Chilaquiles", "Pure de papa"];
            noDisponibles = ["Pollo", "Hot cakes", "Hamburguesa"];
            break;

        case "Jueves":
            disponibles = ["Pollo", "Chilaquiles", "Hot cakes"];
            noDisponibles = ["Sopa", "Hamburguesa", "Pure de papa"];
            break;

        case "Viernes":
            disponibles = ["Pollo", "Chilaquiles", "Hamburguesa", "Pure de papa"];
            noDisponibles = ["Sopa", "Hot cakes"];
            break;

        case "Sábado":
            disponibles = ["Hot cakes", "Hamburguesa", "Chilaquiles"];
            noDisponibles = ["Sopa", "Pollo", "Pure de papa"];
            break;

        case "Domingo":
            disponibles = ["Hot cakes", "Hamburguesa", "Pollo"];
            noDisponibles = ["Sopa", "Chilaquiles", "Pure de papa"];
            break;
    }

    console.log("\nProductos disponibles:");

    
        console.log(disponibles.map(producto => `✅ ${producto}`).join("\n"));
    

    console.log("\nProductos no disponibles:");

    noDisponibles.forEach((producto) => {
        console.log(`❌ ${producto}`);
    });
}




async function menu() {
    const opciones = [
        {
            id: "1",
            label: "Gestionar Cocina",
            accion: () => {
                menuCocina(
                    entrada,
                    menu,
                    agregarPedido,
                    modificarPedido,
                    eliminarPedido,
                    listarPedidos,
                    pedidos
                );
            },
        },
        {
            id: "2",
            label: "Listar pedido",
            accion: () => {
                listarPedidos();
                menu();
            },
        },
        {
    id: "3",
    label: "Promociones",
    accion: () => {

        const diaActual = diasSemana[fecha.getDay()];

        mostrarPromociones(diaActual);

        mostrarDisponibilidad(diaActual);

        menu();
    },
},

        {
            id: "4",
            label: "disponibles",
            accion: () => {
                mostrarDisponibilidad(diasSemana[fecha.getDay()]);
                menu();
            },
        },
        {
            id: "5",
            label: "Salir",
            accion: () => {
                console.log("Hasta luego");
                entrada.close();
            },
        },
    ];
    mostrarMenu("!! MENU !!", opciones);
    const opcion = await pedirOpcion();
    const seleccion = opciones.find((item) => item.id === opcion);
    
    
    


    if (!seleccion) {
        console.log("Opción no válida");
        menu();
        return;
    }

    seleccion.accion();
}

menu();