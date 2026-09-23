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

function pedirOpcion() {
    return new Promise((resolve) => {
        entrada.question("Elige una opcion? ", (opcion) => {
            resolve(opcion.trim());
        });
    });
}

function mostrarMenu(titulo, opciones) {
    console.log(`\n${titulo}`);
    opciones.forEach((opcion) => {
        console.log(`${opcion.id}. ${opcion.label}`);
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
                console.log("No hay promociones activas por el momento.");
                menu();
            },
        },
        {
            id: "4",
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