const pedidos=[];
function agregarPedido(producto){
    pedidos.push({nombre:producto.nombre,precio:producto.precio});
}
function modificarPedido(posicion,nombre,precio){
    if(posicion>=0&&posicion<pedidos.length){
        pedidos[posicion].nombre=nombre;
        pedidos[posicion].precio=precio;
        return true;
    }return false;
}
function eliminarPedido(posicion){
    if(posicion>=0&&posicion<pedidos.length){
        pedidos.splice(posicion,1);
        return true;
    }return false;
}
function listarPedidos(){
    console.log("\npedidos");
if(pedidos.length==0){
        console.log("no hay pedidos");
    }else{
        for(let i=0;i<pedidos.length;i++){
            const {nombre,precio}=pedidos[i];
            console.log(`${i+1}. ${nombre}-$${precio}`);
        } }

   let subtotal=pedidos.reduce(function(acumulado,{precio}){
    return acumulado+precio;
},0);

let descuento=0;
const sopa=pedidos.find(function(producto){
    return producto.nombre.toLowerCase()=="sopa";
});

const chilaquiles=pedidos.find(function(producto){
    return producto.nombre.toLowerCase()=="chilaquiles";
});

const cafe=pedidos.find(function(producto){
    return producto.nombre.toLowerCase()=="cafe";
});

const enchiladas=pedidos.find(function(producto){
    return producto.nombre.toLowerCase()=="enchiladas";
});

const tacos=pedidos.find(function(producto){
    return producto.nombre.toLowerCase()=="tacos";
});

const agua=pedidos.find(function(producto){
    return producto.nombre.toLowerCase()=="agua fresca";
});

const quesadillas=pedidos.find(function(producto){
    return producto.nombre.toLowerCase()=="quesadillas";
});

const jugo=pedidos.find(function(producto){
    return producto.nombre.toLowerCase()=="jugo";
});

const hotcakes=pedidos.find(function(producto){
    return producto.nombre.toLowerCase()=="hot cakes";
});

const hamburguesa=pedidos.find(function(producto){
    return producto.nombre.toLowerCase()=="hamburguesa";
});

if(sopa){
    descuento=descuento+sopa.precio*0.10;
    console.log("promocion aplicada 10% en sopa");
}

if(chilaquiles){
    descuento=descuento+chilaquiles.precio*0.20;
    console.log("promocion aplicada 20% en chilaquiles");
}

if(cafe&&enchiladas){
    descuento=descuento+(cafe.precio+enchiladas.precio-95);
    console.log("promocion aplicada enchiladas + cafe por $95");
}

if(tacos&&agua){
    descuento=descuento+(tacos.precio+agua.precio-95);
    console.log("promocion aplicada tacos + agua fresca por $95");
}

if(quesadillas&&jugo){
    descuento=descuento+(quesadillas.precio+jugo.precio-90);
    console.log("promocion aplicada quesadillas + jugo por $90");
}

if(hotcakes&&cafe){
    descuento=descuento+(hotcakes.precio+cafe.precio-50);
    console.log("promocion aplicada hot cakes + cafe por $50");
}

if(hamburguesa&&jugo){
    descuento=descuento+(hamburguesa.precio+jugo.precio-130);
    console.log("promocion aplicada hamburguesa + jugo por $130");
}
subtotal=subtotal-descuento;

const IVA=subtotal*0.16;
const total=subtotal+IVA;

console.log("\ndescuento");
console.log(descuento);

console.log("subtotal");
console.log(subtotal);

console.log("iva");
console.log(IVA);

console.log("total");
console.log(total);
}

export{pedidos,agregarPedido,modificarPedido,eliminarPedido,listarPedidos};

