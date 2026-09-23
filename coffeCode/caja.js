const pedidos = [];

function agregarPedido(producto) {
    if (!producto || !producto.nombre || typeof producto.precio !== "number") {
        return false;
    }

    pedidos.push({
        nombre: producto.nombre,
        precio: producto.precio,
        categoria: producto.categoria || "sin categoria"
    });

    return true;
}

function modificarPedido(posicion, nombre, precio) {
    const index = Number(posicion);

    if (Number.isInteger(index) && index >= 0 && index < pedidos.length) {
        pedidos[index].nombre = nombre;
        pedidos[index].precio = Number(precio);
        return true;
    }

    return false;
}

function eliminarPedido(posicion) {
    const index = Number(posicion);

    if (Number.isInteger(index) && index >= 0 && index < pedidos.length) {
        pedidos.splice(index, 1);
        return true;
    }

    return false;
}

function listarPedidos() {
    console.log("\nPEDIDOS");
    let total = 0;

    if (pedidos.length === 0) {
        console.log("no hay pedidos");
    } else {
        for (let i = 0; i < pedidos.length; i++) {
            console.log(`${i + 1}. ${pedidos[i].nombre} - $${pedidos[i].precio}`);
            total += pedidos[i].precio;
        }
    }

    console.log("TOTAL ACUMULADO");
    console.log(total);
}

export { pedidos, agregarPedido, modificarPedido, eliminarPedido, listarPedidos };