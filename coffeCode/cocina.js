const productos=[
    {nombre: "Sopa",precio:60},
    {nombre: "Pollo",precio:100},
    {nombre:"Chilaquiles",precio:40},
    {nombre:"Hot cakes",precio:30},
    {nombre:"Hamburguesa",precio:110},
    {nombre:"Pure de papa",precio:50}
];

function listarProductos(){
for(let i =0; i <productos.length; i++){
console.log(`${i+1}. ${productos[i].nombre}-$${productos[i].precio}`);
}

}

function menuCocina(entrada,callback,agregarPedido,modificarPedido,eliminarPedido,listarPedidos,pedidos
){

    console.log("\n!! GESTIÓN DE COCINA !!!");
    console.log("1.Agregar producto");
    console.log("2.Modificar producto");
    console.log("3.Eliminar producto");
    console.log("4. Salir Gestion Cocina");
entrada.question("Elige una opcion? ",function(opcion){

        if(opcion =="1"){
        listarProductos();
        entrada.question(
                "Que producto deseas agregar? ",function(num){
                    if(num.toLowerCase()== "no"){

                        menuCocina(entrada,callback,agregarPedido,modificarPedido,eliminarPedido,listarPedidos,pedidos);

                    }else{
                    const pos =Number(num)- 1;
                    if(pos >=0 && pos< productos.length){

                            agregarPedido(productos[pos]);

                            console.log(`Se agrego: ${productos[pos].nombre}`);

                        }else{

                            console.log( "Nmero de producto no valido.");

                        }

                        menuCocina(entrada,callback,agregarPedido,modificarPedido,eliminarPedido,listarPedidos,pedidos);

                    }

                }
            );

        } else if(opcion== "2"){

            listarPedidos();

            if(pedidos.length>0){

                entrada.question("Numero del producto a modificar: ",
                    function(num){

                        const pos =Number(num)- 1;

                        if(pos >= 0 &&pos < pedidos.length){

                            entrada.question("Nuevo nombre: ",function(nombre){

                                    entrada.question("Nuevo precio: ",function(precio){

                                            modificarPedido( pos, nombre, Number(precio));

                                            console.log("Producto modificado correctamente");

                                            menuCocina(
                                                entrada,
                                                callback,
                                                agregarPedido,
                                                modificarPedido,
                                                eliminarPedido,
                                                listarPedidos,
                                                pedidos
                                            );

                                        }
                                    );

                                }
                            );

                        } else {

                            console.log(
                                "Nmero de producto no valido."
                            );

                            menuCocina(
                                entrada,
                                callback,
                                agregarPedido,
                                modificarPedido,
                                eliminarPedido,
                                listarPedidos,
                                pedidos
                            );

                        }

                    }
                );

            } else {

                menuCocina(
                    entrada,
                    callback,
                    agregarPedido,
                    modificarPedido,
                    eliminarPedido,
                    listarPedidos,
                    pedidos
                );

            }

    
        } else if(opcion == "3"){

            listarPedidos();

            if(pedidos.length > 0){

                entrada.question(
                    "Numero del producto a eliminar: ",
                    function(num){

                        const pos = Number(num) - 1;

                        if(eliminarPedido(pos)){

                            console.log(
                                "Producto eliminado correctamente"
                            );

                        } else {

                            console.log(
                                "Numero de producto no valido."
                            );

                        }

                        menuCocina(
                            entrada,
                            callback,
                            agregarPedido,
                            modificarPedido,
                            eliminarPedido,
                            listarPedidos,
                            pedidos
                        );

                    }
                );

            } else {

                menuCocina(
                    entrada,
                    callback,
                    agregarPedido,
                    modificarPedido,
                    eliminarPedido,
                    listarPedidos,
                    pedidos
                );

            }

     
        } else if(opcion == "4"){

            callback();

        } else {

            console.log("Opcin no valida.");

            menuCocina(
                entrada,
                callback,
                agregarPedido,
                modificarPedido,
                eliminarPedido,
                listarPedidos,
                pedidos
            );

        }

    });
}

export {
    productos,
    listarProductos,
    menuCocina
};