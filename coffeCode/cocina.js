const productos=[
    {nombre:"Sopa",precio:60,tipo:"comida"},
    {nombre:"Pollo",precio:100,tipo:"comida"},
    {nombre:"Chilaquiles",precio:40,tipo:"desayuno"},
    {nombre:"Hot cakes",precio:30,tipo:"desayuno"},
    {nombre:"Hamburguesa",precio:110,tipo:"comida"},
    {nombre:"Pure de papa",precio:50,tipo:"comida"},
    {nombre:"Cafe",precio:30,tipo:"bebida"},
    {nombre:"Jugo",precio:35,tipo:"bebida"},
    {nombre:"Pastel",precio:45,tipo:"postre"},
    {nombre:"Tacos",precio:80,tipo:"comida"},
    {nombre:"Enchiladas",precio:75,tipo:"comida"},
    {nombre:"Quesadillas",precio:65,tipo:"comida"},
    {nombre:"Tamales",precio:55,tipo:"desayuno"},
    {nombre:"Licuado",precio:45,tipo:"bebida"},
    {nombre:"Agua fresca",precio:25,tipo:"bebida"},
    {nombre:"Flan",precio:40,tipo:"postre"},
    {nombre:"Arroz con leche",precio:35,tipo:"postre"}
];

function listarProductos(){
    for(let i=0;i<productos.length;i++){
    console.log(`${i+1}. ${productos[i].nombre}-$${productos[i].precio}`);
    }
}

function agregarProducto(nombre,precio,tipo){
    productos.push({nombre:nombre,precio:precio,tipo:tipo});
}

function productosBaratos(){
    const baratos=productos.filter(function(producto){
        return producto.precio<=60;
    });
    console.log("\nlos baratos son");
    baratos.forEach(function(producto){
    console.log(`${producto.nombre}-$${producto.precio}`);
    });
}

function productosCaros(){
    const caros=productos.filter(function(producto){
        return producto.precio>60;
    });
    console.log("\nlos caros son:");
    caros.forEach(function(producto){
    console.log(`${producto.nombre}-$${producto.precio}`);
    });
}

function bebidas(){
    const productosBebida=productos.filter(function(producto){
        return producto.tipo=="bebida";
    });
    console.log("\nbebidas");
    productosBebida.forEach(function(producto){
     console.log(`${producto.nombre}-$${producto.precio}`);
    });
}

function postres(){
    const productosPostre=productos.filter(function(producto){
    return producto.tipo=="postre";
    });
    console.log("\npostres");
    productosPostre.forEach(function(producto){
    console.log(`${producto.nombre}-$${producto.precio}`);
    });
}

function buscarProducto(nombre){
    const producto=productos.find(function(producto){
    return producto.nombre.toLowerCase()==nombre.toLowerCase();
    });
    return producto;
}

function menuCocina(entrada,callback,agregarPedido,modificarPedido,eliminarPedido,listarPedidos,pedidos){
    console.log("\n!! gestion de cocina !!");
    console.log("1.agregar producto");
    console.log("2.modificar producto");
    console.log("3.eliminar producto");
    console.log("4.buscar productos");
    console.log("5.salir gestion cocina");

    entrada.question("elige una opcion?",function(opcion){
        if(opcion=="1"){
            listarProductos();
            entrada.question("que producto deseas agregar? ",function(num){
                if(num.toLowerCase()=="no"){
                menuCocina(entrada,callback,agregarPedido,modificarPedido,eliminarPedido,listarPedidos,pedidos);
                }else{
                    const pos=Number(num)-1;
                    if(pos>=0&&pos<productos.length){
                    agregarPedido(productos[pos]);
                    console.log(`se agrego: ${productos[pos].nombre}`);
                    }else{
                    console.log("no existee");
                    }
                    menuCocina(entrada,callback,agregarPedido,modificarPedido,eliminarPedido,listarPedidos,pedidos);
                }
            });
        }else if(opcion=="2"){
            listarPedidos();
            if(pedidos.length>0){
                entrada.question("numero del producto a modificar: ",function(num){
                    const pos=Number(num)-1;
                    if(pos>=0&&pos<pedidos.length){
                    entrada.question("nuevo nombre: ",function(nombre){
                        entrada.question("nuevo precio: ",function(precio){
                        modificarPedido(pos,nombre,Number(precio));
                        console.log("producto modificado");
                        menuCocina(entrada,callback,agregarPedido,modificarPedido,eliminarPedido,listarPedidos,pedidos);
                            });
                        });
                    }else{
                        console.log("no existe");
                        menuCocina(entrada,callback,agregarPedido,modificarPedido,eliminarPedido,listarPedidos,pedidos);
                    }
                });
            }else{
                menuCocina(entrada,callback,agregarPedido,modificarPedido,eliminarPedido,listarPedidos,pedidos);
            }
        }else if(opcion=="3"){
            listarPedidos();
            if(pedidos.length>0){
                entrada.question("numero del producto a eliminar: ",function(num){
                    const pos=Number(num)-1;
                if(eliminarPedido(pos)){
                console.log("producto eliminado");
                }else{
                console.log("no existee");
                    }
                    menuCocina(entrada,callback,agregarPedido,modificarPedido,eliminarPedido,listarPedidos,pedidos);
                });
            }else{
                menuCocina(entrada,callback,agregarPedido,modificarPedido,eliminarPedido,listarPedidos,pedidos);
            }
        }else if(opcion=="4"){
            console.log("\n!! buscar productos !");
            console.log("1.productos baratos");
            console.log("2.productos caros");
            console.log("3.bebidas");
            console.log("4.postres");
            console.log("5.buscar producto");

            entrada.question("elige una opcion? ",function(busqueda){
                if(busqueda=="1"){
                    productosBaratos();
                }else if(busqueda=="2"){
                    productosCaros();
                }else if(busqueda=="3"){
                    bebidas();
                }else if(busqueda=="4"){
                    postres();
                }else if(busqueda=="5"){
                    entrada.question("nombre del producto:",function(nombre){
                        const producto=buscarProducto(nombre);
                        if(producto){
                        console.log(`${producto.nombre}-$${producto.precio}`);
                        }else{
                            onsole.log("no existe");
                        }
                        menuCocina(entrada,callback,agregarPedido,modificarPedido,eliminarPedido,listarPedidos,pedidos);
                    });
                    return;
                }else{
    console.log("ono existee");
                }
                menuCocina(entrada,callback,agregarPedido,modificarPedido,eliminarPedido,listarPedidos,pedidos);
            });
        }else if(opcion=="5"){
            callback();
        }else{
            console.log("no existe");
            menuCocina(entrada,callback,agregarPedido,modificarPedido,eliminarPedido,listarPedidos,pedidos);
        }
    });
}

export{productos,listarProductos,menuCocina,buscarProducto,agregarProducto};