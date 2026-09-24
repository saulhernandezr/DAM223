import {menuCocina,productos,agregarProducto} from "./cocina.js";
import {pedidos,agregarPedido,modificarPedido,eliminarPedido,listarPedidos} from "./caja.js";
import readline from "readline";

const entrada=readline.createInterface({input:process.stdin,output:process.stdout});

function menuDinamico(){
    console.log("\n!! menu dinamico !!");
    const menu=productos.map(function(producto,index){
        return `${index+1}. ${producto.nombre}-$${producto.precio}`;
    });
    console.log(menu.join("\n"));
}

function promociones(){
    console.log("\n!! promociones !!");
    const promociones=[
        "10% de descuento en sopa",
        "pollo + bebida por $120",
        "chilaquiles al 20% de descuento",
        "tacos + agua fresca por $95",
        "enchiladas + cafe por $95",
        "quesadillas + jugo por $90",
        "hot cakes + cafe por $50",
        "hamburguesa + jugo por $130"
    ];
    promociones.forEach(function(promocion){
        console.log(promocion);
    });
}

function productosDisponibles(){
    console.log("\n! productos disponibles !!");
    productos.forEach(function(producto){
        console.log(`${producto.nombre}-$${producto.precio}`);
    });
}
function agregarPlatillo(){
    entrada.question("nombre del platillo: ",function(nombre){
        entrada.question("precio: ",function(precio){
        entrada.question("tipo:",function(tipo){
        agregarProducto(nombre,Number(precio),tipo);
        console.log(`se agrego ${nombre} al menu`);
        menu();
            });
        });
    });
}

function menu(){
    console.log("\n!! menu !!");
    console.log("1.gestionar cocina");
    console.log("2.listar pedido");
    console.log("3.menu dinamico");
    console.log("4.promociones");
    console.log("5.productos disponibles");
    console.log("6.agregar platillo al menu");
    console.log("7.salir");

    entrada.question("escoje una opcion: ",function(opcion){
        if(opcion=="1"){
            menuCocina(
                entrada,
                menu,
                agregarPedido,
                modificarPedido,
                eliminarPedido,
                listarPedidos,
                pedidos
            );
        }else if(opcion=="2"){
            listarPedidos();
            menu();
        }else if(opcion=="3"){
            menuDinamico();
            menu();
        }else if(opcion=="4"){
            promociones();
            menu();
        }else if(opcion=="5"){
            productosDisponibles();
            menu();
        }else if(opcion=="6"){
            agregarPlatillo();
        }else if(opcion=="7"){
            entrada.close();
        }else{
            console.log("ups no existe");
            menu();
        }
    });
}

menu();