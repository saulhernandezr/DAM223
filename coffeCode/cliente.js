import {menuCocina}from "./cocina.js";

import {pedidos,agregarPedido,modificarPedido,eliminarPedido,listarPedidos
} from "./caja.js";
import readline from "readline";

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu(){
console.log("\n!! MENU !!");
    console.log("1.Gestionar Cocina");
    console.log("2. Listar pedido");
    console.log("3. Salir");
entrada.question("Elige una opcion? ",function(opcion){

if(opcion=="1"){
menuCocina(entrada,menu,agregarPedido,modificarPedido,eliminarPedido,listarPedidos,pedidos);

        }else if(opcion=="2"){
            listarPedidos();
            menu();

        }else if(opcion == "3"){
    entrada.close();

        }else {
    console.log("no valido");
menu();

        }
     });
}

menu();